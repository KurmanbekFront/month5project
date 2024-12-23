import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePostPage from "./pages/createPostPage/CreatePostPage";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
function App() {
    return (
        <div className="container">
            {/* <MainPage/> */}
            {/* <UsersPage/> */}
            {/* <CountPage /> */}
            {/* <PostsPage /> */}
            {/* <CreatePostPage /> */}
            <h1>Task Planner</h1>
            <TaskForm />
            <TaskList />
        </div>
    );
}

export default App;
