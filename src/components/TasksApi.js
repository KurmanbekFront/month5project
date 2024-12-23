export const fetchTask = async () => {
    return new Promise((resolve) => 
    setTimeout(() => {
        resolve([
            {id: 1, title: 'Learn Redux toolkit', completed: false},
            {id: 2, title: 'Create a Project', completed: true},
        ])
    }, 1000)
    )
}