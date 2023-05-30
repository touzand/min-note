import {KnowledgePanelContainer} from './style';

const KnowledgePanel = (props) => {
const {wordCount,characterCount,noteCount} = props

  return (
    <KnowledgePanelContainer>
      <header>
        <h3>all u need to know</h3>
      </header>

      <main>
        <div className="main_top">
          <h1>{ noteCount }</h1>
          <span>notes</span>
        </div>

        <div className="main_bottom grid">
          <div>
            <span>words</span>
            <h2>{ wordCount }</h2>
          </div>
          <div>
            <span>characters</span>
            <h2>{ characterCount }</h2>
          </div>
          <div>
            <span>tags</span>
            <h2>0</h2>
          </div>
        </div>
      </main>

      <footer></footer>
    </KnowledgePanelContainer>
  );
};

export default KnowledgePanel;
