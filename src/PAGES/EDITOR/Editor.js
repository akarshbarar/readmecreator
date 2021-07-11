import React from 'react'
import Elements from '../../COMPONENTS/ELEMENTS/Elements'
import MainEditor from '../../COMPONENTS/MARKDOWNEDITOR/MainEditor';
import Preview from '../../COMPONENTS/PREVIEW/Preview';
import './Editor.css'
import { Link} from 'react-router-dom'
function Editor() {
    return (
        <div className="editor">
            <nav>
                <div className="logo"><Link to="/"> ReadME_Creator </Link> </div>
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
