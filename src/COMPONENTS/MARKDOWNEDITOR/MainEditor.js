import React, { useEffect, useState} from 'react'
import './MainEditor.css'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux';
import { addToSelectedItemsToStore } from '../../STATE_MANAGE/ACTIONS';

function MainEditor() {
   const selectedElementReducer = useSelector(state=>state.selectedElementReducer);
   const [text, settext] = useState('')
    useEffect(() => {
        selectedElementReducer.forEach(element => {
            if(element.item === 'Acknowledgement') {
                let editorText=`
                    ## Acknowledgements

                    - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
                    - [Awesome README](https://github.com/matiassingers/awesome-readme)
                    - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

                    `
                settext(text+editorText)
            }
        if(element.item == "API Refrence"){
            // let editorText="
            //             ## API Reference
            //             #### Get all items
            //             ```http
            //             GET /api/items
            //             ```
            //             | Parameter | Type     | Description                |
            //             | :-------- | :------- | :------------------------- |
            //             | `api_key` | `string` | **Required**. Your API key |
            //             #### Get item
            //             ```http
            //             GET /api/items/${id}
            //             ```
            //             | Parameter | Type     | Description                       |
            //             | :-------- | :------- | :-------------------------------- |
            //             | `id`      | `string` | **Required**. Id of item to fetch |

            //             #### add(num1, num2)

            //             Takes two numbers and returns the sum.

  
            // "
        //settext(text+editorText)
        }
        if(element.item == "Apprendix"){
            let editorText=`
         

                    ## Appendix

                    Any additional information goes here

  
            `
        settext(text+editorText)
        }
        if(element.item == "Authors"){
            let editorText=`

                    ## Authors

                    - [@katherinepeterson](https://www.github.com/octokatherine)

            `
        settext(text+editorText)
        }
        if(element.item == "Badges"){
            let editorText=`


                    ## Badges

                    Add badges from somewhere like: [shields.io](https://shields.io/)

                    [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
                    [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
                    [![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

                    
       

            `
        settext(text+editorText)
        }
        if(element.item == "Color Refrences"){
            let editorText=`
            ## Acknowledgements

            - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
            - [Awesome README](https://github.com/matiassingers/awesome-readme)
            - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

            `
        settext(text+editorText)
        }
        if(element.item == "Contributing"){
            let editorText=`


                ## Contributing

                Contributions are always welcome!

                See 'contributing.md' for ways to get started.

                Please adhere to this project's 'code of conduct'.

  

            `
        settext(text+editorText)
        }
        if(element.item == "Demo"){
            let editorText=`
           ## Demo

Insert gif or link to demo
            `
        settext(text+editorText)
        }
        if(element.item == "Deployment"){
            let editorText=`
           
## Deployment

To deploy this project run

{bash
  npm run deploy
        }
            `
        settext(text+editorText)
        }
        if(element.item == "Documentation"){
            let editorText=`
             ## Documentation

[Documentation](https://linktodocumentation)

            `
        settext(text+editorText)
        }
        if(element.item == "Environment Variable"){
            let editorText=`
            ## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

{API_KEY}

{ANOTHER_API_KEY}
            `
        settext(text+editorText)
        }
        if(element.item == "FAQ"){
            let editorText=`
            ## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2


            `
        settext(text+editorText)
        }
        if(element.item == "Features"){
            let editorText=`
          ## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

            `
        settext(text+editorText)
        }
        if(element.item == "Feedback"){
            let editorText=`
           ## Feedback

If you have any feedback, please reach out to us at fake@fake.com

  

            `
        settext(text+editorText)
        }
        if(element.item == "Github"){
            let editorText=`
            
            # Hi, I'm Katherine! 👋

                
                ## 🚀 About Me
                I'm a full stack developer...

                
                ## 🔗 Links
                [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherinempeterson.com/)
                [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
                [![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)

                
                ## 🛠 Skills
                Javascript, HTML, CSS...

  
            `
        settext(text+editorText)
        }
        if(element.item == "Installation"){
            let editorText=`

                    ## Installation

                    Install my-project with npm

                    {bash
                    npm install my-project
                    cd my-project
                    }
    
           
            `
        settext(text+editorText)
        }
        if(element.item == "License"){
            let editorText=`
            

## License

[MIT](https://choosealicense.com/licenses/mit/)

  

            `
        settext(text+editorText)
        }
        if(element.item == "Lessons"){
            let editorText=`


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?


            `
        settext(text+editorText)
        }
        if(element.item == "Roadmap"){
            let editorText=`


## Roadmap

- Additional browser support

- Add more integrations



            `
        settext(text+editorText)
        }
        if(element.item == "Support"){
            let editorText=`

## Support

For support, email fake@fake.com or join our Slack channel.

  

            `
        settext(text+editorText)
        }
        if(element.item == "Title and Description"){
            let editorText=`
            
                # Project Title

                A brief description of what this project does and who it's for



            `
        settext(text+editorText)
        }
        });
        
    }, [selectedElementReducer])
    return (
        <div className="maineditor">
            Editor
            {
                    console.log(selectedElementReducer)
            }
            <textarea className="textarea" value={text} ></textarea>

        </div>
    )
}

export default MainEditor
