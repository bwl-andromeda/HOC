import './App.css';
import VideoList from './components/TaskOne/VideoList/VideoList';
import { VideoProps } from './components/TaskOne/VideoProps/VideoProps';
import List from './components/TaskTwo/List/List';


function App() {
  return (
    <>
      <h1>Задание 1!</h1>
      <VideoList list={VideoProps}/>
      <h2>Задание 2!</h2>
      <List />
    </>
  )
}

export default App
