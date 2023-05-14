import BackgroundOption from './BackgroundOption';
import {buttonContent} from './bgCount';
import {
  BackgroundConfig,
  ConfigPanelContainer,
  FooterConfig,
  MainConfig,
} from './style';

const ConfigPanel = () => {
  return (
    <ConfigPanelContainer>
      <MainConfig>
        <BackgroundConfig>
          <h3>Background</h3>
          <span>
            Customize note background color for note thumbnail display on the
            home screen.
          </span>
          <div className='background_option_section'>
            {buttonContent.map(button => (
              <BackgroundOption
                color_name={button.color_name}
                hex_code={button.hex_code}
              />
            ))}
          </div>
        </BackgroundConfig>
      </MainConfig>
      <FooterConfig></FooterConfig>
    </ConfigPanelContainer>
  );
};

export default ConfigPanel;
