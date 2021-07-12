
import React, {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { addToSelectedItemsToStore } from '../../STATE_MANAGE/ACTIONS';
import './Elements.css'
function Elements() {
    const dispatch=useDispatch();
    const selectedElementReducer = useSelector(state=>state.selectedElementReducer);
    const [selectedItems, setSelectedItems] = useState([]);
    var selectionItems=[
        "Acknowledgement",
        "API Refrence",
        "Apprendix",
        "Authors",
        "Badges",
        "Color Refrences",
        "Contributing",
        "Demo",
        "Deployment",
        "Documentation",
        "Environment Variable",
        "FAQ",
        "Features",
        "Feedback",
        "Github",
        "Installation",
        "License",
        "Lessons",
        "Roadmap",
        "Support",
        "Title and Description"
    ];

    function addToSelectedItems(item){
        var newSelectedItems = selectedItems.slice();
        newSelectedItems.push(item);
        newSelectedItems.reduce(function(a,b){
            if (a.indexOf(b) < 0 ) a.push(b);
            return a;
        },[]);
        setSelectedItems(newSelectedItems);
        dispatch(
            addToSelectedItemsToStore(
                {
                    item
                }
            )
        )
    }
    return (
        <div className="elements">
            <div className="elem__heading">
                SECTION ELEMENTS
            </div>
            <div className="elem__content">
                <div className="elem__section">
                    <span className="elem__title">Selected Elements will appear here</span>
                    <div className="elem__items">
                        {
                            selectedItems.map(function(item){  
                                return <div className="elem__item" >{item}</div>
                            })
                        }                            
                      
                    </div>
                </div>
                <div className="elem__section">
                    <span className="elem__title">Click on Elements to add to your page</span>
                    <div className="elem__items">
                        {
                            selectionItems.map(function(item, index){
                                return <div className="elem__item" key={index} onClick={()=>addToSelectedItems(`${item}`)}>
                                    {item}
                                </div>
                            })
                        }
                     
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Elements
