import BackgroundOption from './BackgroundOption';

import {
  BackgroundConfig,
  ConfigPanelContainer,
  FooterConfig,
  MainConfig,
  TextConfig,
} from './style';
import TextOption from './TextOption';
import {useState} from 'react';
import backgroundData from '../../../../helpers/backgroundData';

const ConfigPanel = props => {
  const {setColor,setTextAlign} = props;
  const [selectedBackground, setSelectedBackground] = useState(5);
  const [selectedTextAlign, setSelectedTextAlign] = useState(0);

  const handleBackgroundChange = (index, hex_code) => {
    setSelectedBackground(index);
    setColor(hex_code);
  };

  const handleTextAlignChange = (index,value) => {
    setSelectedTextAlign(index);
    setTextAlign(value);
  };

  return (
    <ConfigPanelContainer>
      <MainConfig>
        <BackgroundConfig>
          <h3>Background</h3>
          <p>
            Customize note background color for note thumbnail display on the
            home screen.
          </p>
          <div className="background_option_section">
            {backgroundData.map((button, index) => (
              <BackgroundOption
                index={index}
                selectedBackground={selectedBackground}
                handleBackgroundChange={handleBackgroundChange}
                color_name={button.color_name}
                hex_code={button.hex_code}
                use_advice={button.use_advice}
              />
            ))}
          </div>
        </BackgroundConfig>
      </MainConfig>
      <MainConfig>
        <TextConfig>
          <h3>Text</h3>
          <p>
            Customize note text properties for the body, excluding the title.
          </p>
          <TextOption setTextAlign={setTextAlign} handleTextAlignChange={handleTextAlignChange} selectedTextAlign={selectedTextAlign}/>
        </TextConfig>
      </MainConfig>
    </ConfigPanelContainer>
  );
};

//<FooterConfig>
//<article>p</article>
//<article>p</article>
//</FooterConfig>

export default ConfigPanel;
