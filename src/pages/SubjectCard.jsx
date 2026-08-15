import './SubjectCard.css';

const SubjectCard = ({ exam }) => {
  // Get valid links - handle both 'links' and 'Link' property names
  const links = exam.links || exam.Link || [];
  const validLinks = Array.isArray(links) ? links.filter(link => link && typeof link === 'string' && link.trim()) : [];
  const totalSlots = 8; // Always show 8 button slots

  const handleComingSoon = (e) => {
    e.preventDefault();
    alert('This paper will be available soon!');
  };
  
  return (
    <div className="subject-card">
      <div className="card-top">
        <div className="icon-circle">
          {exam.image || exam.icon || '📄'}
        </div>
      </div>

      <div className="card-middle">
        <h3 className="subject-code">{exam.code}</h3>
        <div className="divider"></div>
        <p className="subject-title">{exam.title}</p>
      </div>

      <div className="card-bottom">
        <div className="download-buttons">
          {/* Render download buttons for valid links */}
          {validLinks.map((link, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
              title="Download this paper"
            >
              DOWNLOAD
            </a>
          ))}
          
          {/* Render "Coming Soon" buttons to fill remaining slots */}
          {Array.from({ length: totalSlots - validLinks.length }).map((_, idx) => (
            <button
              key={`coming-${idx}`}
              className="coming-soon"
              onClick={handleComingSoon}
              title="This paper will be available soon"
            >
              COMING SOON
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
