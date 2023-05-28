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
  const {configPanelOpen,setNoteContent,noteContent} = props;
  const [selectedBackground, setSelectedBackground] = useState(5);
  const [selectedTextAlign, setSelectedTextAlign] = useState(0);

  const handleBackgroundChange = (index, hex_code) => {
    setNoteContent(prevState=>({...prevState,background_color:hex_code}));
    setSelectedBackground(index);
    console.log({ index,hex_code })
  };

  const handleTextAlignChange = (index,value) => {
    setNoteContent(prevState=>({...prevState,text_align:value}));
    setSelectedTextAlign(index);
  };

  return (
    <ConfigPanelContainer open={configPanelOpen}>
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
                key={index}
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
          <TextOption setNoteContent={setNoteContent} handleTextAlignChange={handleTextAlignChange} selectedTextAlign={selectedTextAlign}/>
        </TextConfig>
      </MainConfig>
    </ConfigPanelContainer>
  );
};

export default ConfigPanel;
