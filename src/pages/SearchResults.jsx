import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { searchData } from '../utils/searchUtils';
import { useTheme } from '../context/ThemeContext';
import './SearchResults.css';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useTheme();
  
  const query = searchParams.get('q') || '';
  
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      if (query) {
        const searchResults = searchData(query);
        setResults(searchResults);
      }
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [query]);
  
  const handleBack = () => {
    navigate('/');
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const openLink = (url) => {
    if (url && url.trim()) {
      window.open(url, '_blank');
    }
  };

  const getFileLinks = (item) => {
    const links = [];
    
    // Check for single link property
    if (item.link && item.link.trim()) {
      links.push(item.link);
    }
    
    // Check for links array property
    if (item.links && Array.isArray(item.links)) {
      links.push(...item.links.filter(l => l && l.trim()));
    }
    
    return links;
  };

  const getResourceType = (item) => {
    // Determine resource type based on data properties
    if (item.questions) return '📝 Exam Practice';
    if (item.links && Array.isArray(item.links) && item.links.length > 0) return '📂 Final Term';
    if (item.link && item.link.trim()) {
      // Additional check - could be from multiple sources
      return '📄 Handout';
    }
    if (item.class) return '✏️ Assignment';
    return '📚 Material';
  };
  
  return (
    <div className={`search-results-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="search-results-header">
        <button className="back-btn" onClick={handleBack}>← Back</button>
        <h1>Search Results</h1>
        <p className="search-query">Results for: <strong>"{query}"</strong></p>
        {results.length > 0 && <p className="result-count">{results.length} result(s) found across all resources</p>}
      </div>
      
      {loading ? (
        <div className="loading">Searching...</div>
      ) : results.length > 0 ? (
        <div className="results-list">
          {results.map(result => {
            const fileLinks = getFileLinks(result);
            const isExpanded = expandedId === result.id;
            const resourceType = getResourceType(result);
            
            return (
              <div key={result.id} className="result-item">
                <div className="result-header" onClick={() => toggleExpand(result.id)}>
                  <div className="result-image">{result.image || '📄'}</div>
                  <div className="result-info">
                    <h3 className="result-title">{result.title}</h3>
                    <div className="result-meta">
                      {result.code && <span className="result-code">{result.code}</span>}
                      <span className="resource-type">{resourceType}</span>
                      {result.category && <span className="result-category">{result.category}</span>}
                    </div>
                  </div>
                  <div className="result-action">
                    {fileLinks.length > 0 ? (
                      <span className="file-count">
                        📁 {fileLinks.length}
                      </span>
                    ) : result.questions ? (
                      <span className="file-count">
                        ❓ Practice
                      </span>
                    ) : (
                      <span className="no-files">—</span>
                    )}
                    <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>▼</span>
                  </div>
                </div>

                {isExpanded && (
                  <div className="result-details">
                    {fileLinks.length > 0 && (
                      <div className="result-files">
                        <p className="files-title">📥 Download Files</p>
                        {fileLinks.map((link, index) => (
                          <button
                            key={index}
                            className="file-link-btn"
                            onClick={() => openLink(link)}
                          >
                            <span className="file-icon">📥</span>
                            <span className="file-label">
                              {fileLinks.length > 1 ? `File ${index + 1}` : 'Download'}
                            </span>
                            <span className="external-icon">↗</span>
                          </button>
                        ))}
                      </div>
                    )}
                    
                    {result.totalQuestions && (
                      <div className="practice-info">
                        <p className="practice-title">❓ Practice Questions</p>
                        <p className="practice-count">{result.totalQuestions} questions available</p>
                      </div>
                    )}

                    {!fileLinks.length && !result.totalQuestions && (
                      <div className="no-details">
                        <p>No additional files available for this resource.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="no-results">
          <p>No results found for "{query}"</p>
          <p className="no-results-hint">Try searching with different keywords:</p>
          <div className="search-hints">
            <span>CS101</span>
            <span>English</span>
            <span>Mathematics</span>
            <span>handout</span>
            <span>exam</span>
            <span>quiz</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
