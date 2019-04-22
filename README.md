# Sample fetch
Nothing <(")

## Installation
Run
```
npm install
```
then
```
npx webpack-dev-server
```
then open new tab in your browser and navigate to `http://localhost:8080`

---
You should see 2 inputs for username and password. When you click the submit button while the 2 inputs are not empty, it will send a request to `http://localhost:3000/api/login`
In express app you can catch the request with something like this
```
app.post("/api/login", (req, res) => {
	// ... do stuff here
}
``
