import {KnowledgePanelContainer} from './style';

const KnowledgePanel = () => {
  return (
    <KnowledgePanelContainer>
      <header>
        <h3>all u need to know</h3>
      </header>

      <div>
        <h1>0</h1>
        <span>notes</span>
      </div>

      <div>
        <div>
          <span>words</span>
          <h2>0</h2>
        </div>
        <div>
          <span>characters</span>
          <h2>0</h2>
        </div>
        <div>
          <span>tags</span>
          <h2>0</h2>
        </div>
      </div>

      <div></div>
    </KnowledgePanelContainer>
  );
};

export default KnowledgePanel;
