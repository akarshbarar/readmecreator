import React from 'react'
import './MainEditor.css'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux';
import { addToSelectedItemsToStore } from '../../STATE_MANAGE/ACTIONS';

function MainEditor() {
   const selectedElementReducer = useSelector(state=>state.selectedElementReducer);

    return (
        <div className="maineditor">
            Editor
            {
                    console.log(selectedElementReducer)
            }
            <textarea className="textarea" value={selectedElementReducer} ></textarea>

        </div>
    )
}

export default MainEditor
