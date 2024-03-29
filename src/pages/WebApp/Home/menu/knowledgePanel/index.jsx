import {KnowledgePanelContainer} from './style';

const KnowledgePanel = props => {
  const {quantity, words, characters, tags} = props.countForKnowledge;

  return (
    <KnowledgePanelContainer>
      <header>
        <h3>all u need to know</h3>
      </header>

      <main>
        <div className="main_top">
          <h1>{quantity}</h1>
          <span>notes</span>
        </div>

        <div className="main_bottom grid">
          <div>
            <span>words</span>
            <h2>{words}</h2>
          </div>
          <div>
            <span>characters</span>
            <h2>{characters}</h2>
          </div>
          <div>
            <span>tags</span>
            <h2>0</h2>
          </div>
        </div>
      </main>

      <footer></footer>

      <p>this panel will show u information constantly</p>
    </KnowledgePanelContainer>
  );
};

export default KnowledgePanel;
