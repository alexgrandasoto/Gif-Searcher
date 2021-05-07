import {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])
    

    return(
        <div className='container'>
            <h2>Gif Searcher</h2>
            <AddCategory setCategories={setCategories}/>
            <hr /> 

            <ol>
                {
                    categories.map(category => <GifGrid key={category} category={category} />)
                }
            </ol>

        </div>
    )
    
}

export default GifExpertApp