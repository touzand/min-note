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
  const {setColor} = props;
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDivClick = (index, hex_code) => {
    setSelectedOption(index);
    setColor(hex_code);
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
                selectedOption={selectedOption}
                handleDivClick={handleDivClick}
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
          <TextOption />
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
