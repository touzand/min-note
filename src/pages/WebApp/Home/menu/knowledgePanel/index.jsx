import {KnowledgePanelContainer} from './style';

const KnowledgePanel = props => {
  const {quantity, words, characters, tags} = props.countsForKnowledge;

  return (
    <KnowledgePanelContainer>
      {
      console.log(props.countsForKnowledge)
      }
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
    </KnowledgePanelContainer>
  );
};

export default KnowledgePanel;
