import React from 'react'
import Elements from '../../COMPONENTS/ELEMENTS/Elements'
import MainEditor from '../../COMPONENTS/MARKDOWNEDITOR/MainEditor';
import Preview from '../../COMPONENTS/PREVIEW/Preview';
import './Editor.css'
function Editor() {
    return (
        <div className="editor">
            <nav>
                <div className="logo">ReadME_Creator</div>
                <button className="btn btn-primary" onClick={() => {} }>Download</button>
            </nav>
            <div className="editor__content">
            <Elements/>
            <MainEditor/>
            <Preview/>
            </div>
        </div>
    )
}

export default Editor
