import React from 'react'
import Elements from '../../COMPONENTS/ELEMENTS/Elements'
import MainEditor from '../../COMPONENTS/MARKDOWNEDITOR/MainEditor';
import Preview from '../../COMPONENTS/PREVIEW/Preview';
import './Editor.css'
function Editor() {
    return (
        <div className="editor">
            <Elements/>
            <MainEditor/>
            <Preview/>
        </div>
    )
}

export default Editor
