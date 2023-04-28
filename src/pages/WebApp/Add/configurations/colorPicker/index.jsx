import { ColorPickerContainer } from "./style";

const ColorPicker = (props) => {
  return (
    <ColorPickerContainer onClick={() => props.setVisible(false)}>
      <div className="color-picker-container">
        <article value="#F5A38A" onClick={props.handdleColorPicker}></article>
        <article value="#f3C57D" onClick={props.handdleColorPicker}></article>
        <article value="#DDE595" onClick={props.handdleColorPicker}></article>
        <article value="#7BD5E1" onClick={props.handdleColorPicker}></article>
        <article value="#C78DD0" onClick={props.handdleColorPicker}></article>
      </div>
    </ColorPickerContainer>
  );
};

export default ColorPicker;
