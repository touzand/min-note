import BackgroundOption from './BackgroundOption';
import {buttonContent} from './bgCount';
import {
  BackgroundConfig,
  ConfigPanelContainer,
  FooterConfig,
  MainConfig,
  TextConfig,
} from './style';
import TextOption from './TextOption';

const ConfigPanel = () => {
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
            {buttonContent.map(button => (
              <BackgroundOption
                color_name={button.color_name}
                hex_code={button.hex_code}
              />
            ))}
          </div>
        </BackgroundConfig>
      </MainConfig>
      <MainConfig>
        <TextConfig>
          <h3>Text</h3>
          <p>Customize note text properties for the body, excluding the title.</p>
          <TextOption/>
        </TextConfig>
      </MainConfig>
      <FooterConfig></FooterConfig>
    </ConfigPanelContainer>
  );
};

export default ConfigPanel;
