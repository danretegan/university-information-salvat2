# Lesson №5

## Life cycle

### Task №1

Show standard methods of a component lifestyle in classes

### Task №2

All collections of tutors, cities, faculties are stored in localStorage

### Task №3

Read all collections of tutors, cities, faculties from localStorage on first page load

```javascript
async componentDidMount() {
    const data = await localStorage.getItem('key')

    if(data) {
        this.setState({
            ...data
        })
    }
}
```

### Task №4

For editing and deleting modals, add the ability to close using the `ESC` button
