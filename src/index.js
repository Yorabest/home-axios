import axios from "axios";
import popularTpl from './templates/popular.hbs';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '098c0a06f6f788991ea9bd1b1a28f1b9';
const refs = {
  popularList: document.querySelector('.popular-js')
}

async function handlePopularRender() {
    
  const res = await handlePopularSearch();
  console.log(res);

  if (!res) {
    alert('something went wrong')
    return
  }

handleMurkup(res)

}

async function handlePopularSearch() {
  try {
       const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
       const data =  await response.data;
    const results = await data.results;
    return results
  } catch (error) {
    return false
  }
}

function handleMurkup(info) {
    const murkup = popularTpl(info)
  refs.popularList.innerHTML = murkup
}

handlePopularRender()
