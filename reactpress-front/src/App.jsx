import React, { useState } from "react"
import { FaPhotoVideo } from 'react-icons/fa';
import { 
    BtnBold,
    BtnBulletList,
    BtnClearFormatting,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnRedo,
    BtnStyles,
    BtnUnderline,
    Editor,
    EditorProvider,
    HtmlButton,
    Toolbar
} from 'react-simple-wysiwyg';
import slugify from 'slugify';

import Sidebar from "./Components/Sidebar";
import Topo from "./Components/Topo";

import{
    Layout,
    Wrapper,
    ContentContainer,
    Content,
    ContainerPost
} from './Components/Containers/style'

const App = () => {
  const [value, setValue] = useState('simple text');

  function onChange(e) {
    setValue(e.target.value);
  }

  const [height, setHeight] = useState(300);

  const handleResize = () => {
    setHeight(height + 50);
  };
  
  const [titulo, setTitulo] = useState('');

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const getUrl = () => {
    const slug = slugify(titulo, { lower: true });
    return `https://meusite.com.br/${slug}`;
  };
  return (
    <Layout>
      <Topo />
      <Wrapper>
        <Sidebar />
        <ContentContainer>
          <Content>
            <ContainerPost>
              <form>
                <input
                    type="text"
                    id="titulo"
                    value={titulo}
                    onChange={handleTituloChange}
                    placeholder="Título"
                />
                {titulo && (
                    <p>
                    Link do site: <a href={getUrl()} target="_blank" rel="noopener noreferrer">{getUrl()}</a>
                    </p>
                )}
                <button className="upload_bt">
                  <FaPhotoVideo size={23} />
                  <spa>Add Media</spa>
                </button>
                <div style={{ height: `${height}px`, border: '1px solid #c5c5c5' }}>
                  <div
                    style={{
                      height: '5px',
                      background: 'lightgray',
                      cursor: 'ns-resize',
                    }}
                    onMouseDown={handleResize}
                  />
                 <EditorProvider>
                    <Editor
                        value={value}
                        onChange={onChange}
                    >
                        <Toolbar>
                        <BtnStyles />
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <HtmlButton />
                        <BtnLink />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <BtnClearFormatting />
                        <BtnRedo />
                        </Toolbar>
                  </Editor>
                 </EditorProvider>
                </div>
              </form>
            </ContainerPost>
          </Content>
        </ContentContainer>
      </Wrapper>
    </Layout>
  );
};

export default App;