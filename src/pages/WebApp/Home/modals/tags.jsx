import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
0%{transform:scale(.9);opacity:0}
100%{transform:scale(1);opacity:1}
`;

const fadeOut = keyframes`
0%{transform:scale(1);opacity:1}
100%{transform:scale(.9);opacity:0}
`;

const TagsModalContainer = styled.div`
background-color:red;
height:200px;
width:200px;

border-radius:.5rem;
position:relative;
//top:50%;
//left:50%;
//transform:translate(-50%,-50%);
transition:all .3s ease-in-out both;
animation:${fadeIn} .3s ease-in-out;

&.close{
animation:${fadeOut} .3s ease-in-out both;
}
`;

const TagsModal = props => {
  const {setTagsModal, tagsModal} = props;

  const onClose = e => {
    e.target.classList.add('close');
    setTimeout(() => {
      setTagsModal(false);
    }, 300);
  };

  return (
    <TagsModalContainer
      onClick={e => onClose(e)}
      tagsModal={tagsModal}></TagsModalContainer>
  );
};

export default TagsModal;
