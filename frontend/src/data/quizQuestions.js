/**
 * Quiz questions by category: Frontend, Backend, DevOps
 * Each: id, category, topic, difficulty (easy|intermediate|hard), question, options (A-D), correctIndex (0-3)
 * Frontend from Frontend questions.txt (Easy 15, Intermediate 15, Hard 15)
 */
export const QUIZ_QUESTIONS = {
  Frontend: [
    // --- EASY (15) ---
    { id: "fe-e1", category: "Frontend", topic: "HTML", difficulty: "easy", question: "What does HTML stand for?", options: ["Hyper Text Markdown Language", "High Text Machine Language", "Hyper Text Markup Language", "Hyper Tool Multi Language"], correctIndex: 2 },
    { id: "fe-e2", category: "Frontend", topic: "HTML/CSS", difficulty: "easy", question: "Which tag is used to link CSS?", options: ["<css>", "<link>", "<style src=\"\">", "<script>"], correctIndex: 1 },
    { id: "fe-e3", category: "Frontend", topic: "CSS", difficulty: "easy", question: "Which CSS property changes text color?", options: ["font-color", "text-style", "color", "text-color"], correctIndex: 2 },
    { id: "fe-e4", category: "Frontend", topic: "React", difficulty: "easy", question: "Which is used to create a React component?", options: ["function", "component()", "createComponent()", "render()"], correctIndex: 0 },
    { id: "fe-e5", category: "Frontend", topic: "JavaScript", difficulty: "easy", question: "What does === mean in JavaScript?", options: ["Equal value only", "Equal value and type", "Assignment", "Not equal"], correctIndex: 1 },
    { id: "fe-e6", category: "Frontend", topic: "JavaScript", difficulty: "easy", question: "Which method adds an element to the end of an array?", options: ["push()", "pop()", "shift()", "add()"], correctIndex: 0 },
    { id: "fe-e7", category: "Frontend", topic: "CSS", difficulty: "easy", question: "What is the default position value in CSS?", options: ["relative", "static", "absolute", "fixed"], correctIndex: 1 },
    { id: "fe-e8", category: "Frontend", topic: "React", difficulty: "easy", question: "Which hook is used for state in React?", options: ["useEffect", "useState", "useRef", "useHook"], correctIndex: 1 },
    { id: "fe-e9", category: "Frontend", topic: "HTML", difficulty: "easy", question: "Which tag creates a hyperlink?", options: ["<a>", "<link>", "<href>", "<url>"], correctIndex: 0 },
    { id: "fe-e10", category: "Frontend", topic: "DOM", difficulty: "easy", question: "What does DOM stand for?", options: ["Data Object Model", "Document Object Model", "Display Object Method", "Digital Object Model"], correctIndex: 1 },
    { id: "fe-e11", category: "Frontend", topic: "CSS", difficulty: "easy", question: "Which CSS layout system is 1-dimensional?", options: ["Grid", "Flexbox", "Float", "Position"], correctIndex: 1 },
    { id: "fe-e12", category: "Frontend", topic: "React", difficulty: "easy", question: "Which attribute is used for React list rendering?", options: ["id", "key", "index", "ref"], correctIndex: 1 },
    { id: "fe-e13", category: "Frontend", topic: "JavaScript", difficulty: "easy", question: "JavaScript runs on:", options: ["Server only", "Browser", "Compiler", "Database"], correctIndex: 1 },
    { id: "fe-e14", category: "Frontend", topic: "JavaScript", difficulty: "easy", question: "Which symbol is used for comments in JS?", options: ["<!-- -->", "//", "##", "**"], correctIndex: 1 },
    { id: "fe-e15", category: "Frontend", topic: "JavaScript", difficulty: "easy", question: "What is missing? let arr = [1,2,3]; arr._____ (4);", options: ["add", "push", "append", "insert"], correctIndex: 1 },
    // --- INTERMEDIATE (15) ---
    { id: "fe-i1", category: "Frontend", topic: "React", difficulty: "intermediate", question: "What does useEffect depend on?", options: ["Props only", "Dependency array", "State only", "JSX"], correctIndex: 1 },
    { id: "fe-i2", category: "Frontend", topic: "React", difficulty: "intermediate", question: "What happens if dependency array is empty in useEffect?", options: ["Runs every render", "Never runs", "Runs once on mount", "Runs twice"], correctIndex: 2 },
    { id: "fe-i3", category: "Frontend", topic: "CSS", difficulty: "intermediate", question: "Which CSS property enables Flexbox?", options: ["display: flex", "flex: true", "layout: flex", "flexbox: enable"], correctIndex: 0 },
    { id: "fe-i4", category: "Frontend", topic: "DOM", difficulty: "intermediate", question: "Event bubbling means:", options: ["Event moves from child to parent", "Parent to child", "Stops at target", "Reload page"], correctIndex: 0 },
    { id: "fe-i5", category: "Frontend", topic: "React", difficulty: "intermediate", question: "Which lifecycle does useEffect replace?", options: ["constructor", "componentDidMount", "render", "setState"], correctIndex: 1 },
    { id: "fe-i6", category: "Frontend", topic: "React", difficulty: "intermediate", question: "What is JSX?", options: ["HTML file", "JS + XML syntax", "CSS file", "React server"], correctIndex: 1 },
    { id: "fe-i7", category: "Frontend", topic: "React", difficulty: "intermediate", question: "What is wrong? const [count, setCount] = useState;", options: ["Nothing", "useState needs parentheses", "count must be var", "Wrong order"], correctIndex: 1 },
    { id: "fe-i8", category: "Frontend", topic: "React", difficulty: "intermediate", question: "Which is true about keys in React?", options: ["They must be random", "They must be unique among siblings", "They can be duplicated", "Only numbers allowed"], correctIndex: 1 },
    { id: "fe-i9", category: "Frontend", topic: "CSS", difficulty: "intermediate", question: "Which CSS unit is relative?", options: ["px", "cm", "rem", "pt"], correctIndex: 2 },
    { id: "fe-i10", category: "Frontend", topic: "DOM", difficulty: "intermediate", question: "What does preventDefault() do?", options: ["Stops event propagation", "Stops default browser action", "Deletes element", "Prevents rendering"], correctIndex: 1 },
    { id: "fe-i11", category: "Frontend", topic: "JavaScript", difficulty: "intermediate", question: "What is closure?", options: ["Function with memory", "Block of CSS", "React hook", "API"], correctIndex: 0 },
    { id: "fe-i12", category: "Frontend", topic: "JavaScript", difficulty: "intermediate", question: "Which method removes last array item?", options: ["pop()", "remove()", "shift()", "delete()"], correctIndex: 0 },
    { id: "fe-i13", category: "Frontend", topic: "JavaScript", difficulty: "intermediate", question: "What will this output? console.log(typeof null);", options: ["null", "object", "undefined", "string"], correctIndex: 1 },
    { id: "fe-i14", category: "Frontend", topic: "React", difficulty: "intermediate", question: "What is prop drilling?", options: ["Passing props deeply through components", "API call", "State update", "Hook usage"], correctIndex: 0 },
    { id: "fe-i15", category: "Frontend", topic: "CSS", difficulty: "intermediate", question: "Which CSS property controls stacking order?", options: ["order", "stack", "z-index", "layer"], correctIndex: 2 },
    // --- HARD (15) ---
    { id: "fe-h1", category: "Frontend", topic: "React", difficulty: "hard", question: "What triggers React re-render?", options: ["DOM change", "State or prop change", "CSS update", "Console log"], correctIndex: 1 },
    { id: "fe-h2", category: "Frontend", topic: "React", difficulty: "hard", question: "What is reconciliation?", options: ["DOM replacement", "Virtual DOM diffing process", "State reset", "Hook execution"], correctIndex: 1 },
    { id: "fe-h3", category: "Frontend", topic: "JavaScript", difficulty: "hard", question: "const obj = {}; obj.name = \"Aditi\"; Object.freeze(obj); obj.name = \"Riya\"; What happens?", options: ["Name changes", "Error", "Value stays \"Aditi\"", "Undefined"], correctIndex: 2 },
    { id: "fe-h4", category: "Frontend", topic: "JavaScript", difficulty: "hard", question: "Which is true about var?", options: ["Block scoped", "Function scoped", "Immutable", "Strict only"], correctIndex: 1 },
    { id: "fe-h5", category: "Frontend", topic: "JavaScript", difficulty: "hard", question: "What is time complexity of array search?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correctIndex: 1 },
    { id: "fe-h6", category: "Frontend", topic: "React", difficulty: "hard", question: "What does memoization do?", options: ["Deletes state", "Caches results", "Re-renders faster", "Cleans memory"], correctIndex: 1 },
    { id: "fe-h7", category: "Frontend", topic: "React", difficulty: "hard", question: "useEffect(() => { console.log('Hi'); }, ______ ); To run only when count changes:", options: ["[]", "[count]", "count", "{}"], correctIndex: 1 },
    { id: "fe-h8", category: "Frontend", topic: "React", difficulty: "hard", question: "What is hydration in React?", options: ["CSS loading", "Attaching events to SSR markup", "DOM cleaning", "Memory reset"], correctIndex: 1 },
    { id: "fe-h9", category: "Frontend", topic: "Web", difficulty: "hard", question: "What is CORS?", options: ["CSS rule", "Security policy", "React hook", "Server type"], correctIndex: 1 },
    { id: "fe-h10", category: "Frontend", topic: "JavaScript", difficulty: "hard", question: "What is debouncing?", options: ["Delay repeated execution", "Speed execution", "Stop rendering", "Refresh API"], correctIndex: 0 },
    { id: "fe-h11", category: "Frontend", topic: "JavaScript", difficulty: "hard", question: "What is throttling?", options: ["Run once", "Limit execution rate", "Stop execution", "Loop function"], correctIndex: 1 },
    { id: "fe-h12", category: "Frontend", topic: "React", difficulty: "hard", question: "What is Virtual DOM?", options: ["Real browser DOM", "Copy of DOM in memory", "CSS file", "Node server"], correctIndex: 1 },
    { id: "fe-h13", category: "Frontend", topic: "JavaScript", difficulty: "hard", question: "What will this output? console.log(0.1 + 0.2 === 0.3);", options: ["true", "false", "error", "undefined"], correctIndex: 1 },
    { id: "fe-h14", category: "Frontend", topic: "React", difficulty: "hard", question: "What is React context used for?", options: ["Styling", "Global state sharing", "Animation", "Routing"], correctIndex: 1 },
    { id: "fe-h15", category: "Frontend", topic: "React", difficulty: "hard", question: "What does useRef NOT trigger?", options: ["State update", "Re-render", "DOM access", "Value storage"], correctIndex: 1 },
  ],
  Backend: [
    // --- EASY (15) ---
    { id: "be-e1", category: "Backend", topic: "API", difficulty: "easy", question: "What does API stand for?", options: ["Application Programming Interface", "Application Process Integration", "Advanced Program Interface", "Application Private Internet"], correctIndex: 0 },
    { id: "be-e2", category: "Backend", topic: "API", difficulty: "easy", question: "Which HTTP method is used to retrieve data?", options: ["POST", "GET", "PUT", "DELETE"], correctIndex: 1 },
    { id: "be-e3", category: "Backend", topic: "API", difficulty: "easy", question: "Which HTTP method is used to create data?", options: ["GET", "POST", "FETCH", "UPDATE"], correctIndex: 1 },
    { id: "be-e4", category: "Backend", topic: "API", difficulty: "easy", question: "Which status code means \"Not Found\"?", options: ["200", "201", "404", "500"], correctIndex: 2 },
    { id: "be-e5", category: "Backend", topic: "API", difficulty: "easy", question: "What does JSON stand for?", options: ["JavaScript Object Notation", "Java Syntax Object Network", "Java Server Object Node", "JavaScript Online Notation"], correctIndex: 0 },
    { id: "be-e6", category: "Backend", topic: "Database", difficulty: "easy", question: "What is a database?", options: ["A UI framework", "A place to store structured data", "A server language", "An API tool"], correctIndex: 1 },
    { id: "be-e7", category: "Backend", topic: "Database", difficulty: "easy", question: "Which is a relational database?", options: ["MongoDB", "Redis", "MySQL", "Firebase"], correctIndex: 2 },
    { id: "be-e8", category: "Backend", topic: "Database", difficulty: "easy", question: "Which of the following is NoSQL?", options: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"], correctIndex: 2 },
    { id: "be-e9", category: "Backend", topic: "API", difficulty: "easy", question: "Which port does HTTP use by default?", options: ["21", "80", "443", "3000"], correctIndex: 1 },
    { id: "be-e10", category: "Backend", topic: "API", difficulty: "easy", question: "Which status code means \"Internal Server Error\"?", options: ["400", "401", "404", "500"], correctIndex: 3 },
    { id: "be-e11", category: "Backend", topic: "API", difficulty: "easy", question: "What does REST stand for?", options: ["Remote Execution State Transfer", "Representational State Transfer", "Resource Execution System Transfer", "Random Execution Server Type"], correctIndex: 1 },
    { id: "be-e12", category: "Backend", topic: "API", difficulty: "easy", question: "What is middleware?", options: ["Database", "Function between request and response", "Frontend tool", "Server hardware"], correctIndex: 1 },
    { id: "be-e13", category: "Backend", topic: "Security", difficulty: "easy", question: "What is hashing mainly used for?", options: ["Styling", "Password storage", "API routing", "Logging"], correctIndex: 1 },
    { id: "be-e14", category: "Backend", topic: "API", difficulty: "easy", question: "Which tool is used to test APIs?", options: ["Photoshop", "Figma", "Postman", "VS Code"], correctIndex: 2 },
    { id: "be-e15", category: "Backend", topic: "API", difficulty: "easy", question: "What is missing? app._____('/users', (req, res) => { res.send(\"Users list\"); }); To retrieve users.", options: ["post", "get", "fetch", "request"], correctIndex: 1 },
    // --- INTERMEDIATE (15) ---
    { id: "be-i1", category: "Backend", topic: "API", difficulty: "intermediate", question: "What is stateless in REST?", options: ["Server stores session", "Each request contains full info", "DB stores state", "Browser stores session"], correctIndex: 1 },
    { id: "be-i2", category: "Backend", topic: "Security", difficulty: "intermediate", question: "What is JWT used for?", options: ["Styling", "Authentication", "Database indexing", "Routing"], correctIndex: 1 },
    { id: "be-i3", category: "Backend", topic: "API", difficulty: "intermediate", question: "What does 401 status mean?", options: ["Not Found", "Unauthorized", "Bad Request", "Forbidden"], correctIndex: 1 },
    { id: "be-i4", category: "Backend", topic: "Security", difficulty: "intermediate", question: "What is SQL Injection?", options: ["CSS attack", "Malicious SQL execution", "Network overload", "API crash"], correctIndex: 1 },
    { id: "be-i5", category: "Backend", topic: "Database", difficulty: "intermediate", question: "What is indexing in DB?", options: ["Table deletion", "Faster search optimization", "Password encryption", "Data validation"], correctIndex: 1 },
    { id: "be-i6", category: "Backend", topic: "Architecture", difficulty: "intermediate", question: "Which layer handles business logic?", options: ["Database", "Controller", "Service layer", "Router"], correctIndex: 2 },
    { id: "be-i7", category: "Backend", topic: "API", difficulty: "intermediate", question: "What is wrong? app.get('/users', async (req, res) => { const users = User.find(); res.json(users); });", options: ["Nothing", "Missing await", "res.json invalid", "Route incorrect"], correctIndex: 1 },
    { id: "be-i8", category: "Backend", topic: "Security", difficulty: "intermediate", question: "What is CORS?", options: ["Database system", "Security policy for cross-origin requests", "Authentication method", "Logging tool"], correctIndex: 1 },
    { id: "be-i9", category: "Backend", topic: "Security", difficulty: "intermediate", question: "What does bcrypt do?", options: ["Encrypt database", "Hash passwords", "Store sessions", "Route APIs"], correctIndex: 1 },
    { id: "be-i10", category: "Backend", topic: "API", difficulty: "intermediate", question: "What is rate limiting used for?", options: ["Speed boost", "Prevent abuse", "Styling", "Logging"], correctIndex: 1 },
    { id: "be-i11", category: "Backend", topic: "Database", difficulty: "intermediate", question: "What is a foreign key?", options: ["Primary identifier", "Reference to another table", "Index", "Password"], correctIndex: 1 },
    { id: "be-i12", category: "Backend", topic: "Database", difficulty: "intermediate", question: "What is normalization?", options: ["Styling DB", "Reducing redundancy", "Encrypting data", "Creating API"], correctIndex: 1 },
    { id: "be-i13", category: "Backend", topic: "API", difficulty: "intermediate", question: "What happens? res.status(201).send(\"Created\");", options: ["Error", "Sends response with status 201", "Redirect", "Delete record"], correctIndex: 1 },
    { id: "be-i14", category: "Backend", topic: "Database", difficulty: "intermediate", question: "What is a transaction in DB?", options: ["API call", "Atomic DB operation", "Logging system", "Cache"], correctIndex: 1 },
    { id: "be-i15", category: "Backend", topic: "Architecture", difficulty: "intermediate", question: "What is load balancing?", options: ["DB indexing", "Distributing traffic across servers", "Password hashing", "Routing"], correctIndex: 1 },
    // --- HARD (15) ---
    { id: "be-h1", category: "Backend", topic: "Database", difficulty: "hard", question: "What is ACID property?", options: ["API protocol", "DB reliability principles", "Server memory model", "Security layer"], correctIndex: 1 },
    { id: "be-h2", category: "Backend", topic: "Database", difficulty: "hard", question: "Which is NOT part of ACID?", options: ["Atomicity", "Consistency", "Isolation", "Optimization"], correctIndex: 3 },
    { id: "be-h3", category: "Backend", topic: "Database", difficulty: "hard", question: "What is wrong? try { await db.save(user); } catch (err) {}", options: ["Nothing", "Missing finally", "Empty catch block", "await invalid"], correctIndex: 2 },
    { id: "be-h4", category: "Backend", topic: "Architecture", difficulty: "hard", question: "What is horizontal scaling?", options: ["Bigger server", "More servers", "Faster CPU", "Larger DB"], correctIndex: 1 },
    { id: "be-h5", category: "Backend", topic: "Architecture", difficulty: "hard", question: "What is vertical scaling?", options: ["Add servers", "Increase server power", "Add database", "Add cache"], correctIndex: 1 },
    { id: "be-h6", category: "Backend", topic: "Database", difficulty: "hard", question: "What is deadlock?", options: ["Server crash", "Two transactions waiting on each other", "404 error", "API timeout"], correctIndex: 1 },
    { id: "be-h7", category: "Backend", topic: "Database", difficulty: "hard", question: "What is eventual consistency?", options: ["Immediate sync", "Delayed data consistency", "No consistency", "Strong locking"], correctIndex: 1 },
    { id: "be-h8", category: "Backend", topic: "API", difficulty: "hard", question: "What will this do? app.use((req, res, next) => { console.log(\"Request received\"); next(); });", options: ["Blocks request", "Middleware logs every request", "Sends response", "Stops server"], correctIndex: 1 },
    { id: "be-h9", category: "Backend", topic: "Database", difficulty: "hard", question: "What is N+1 query problem?", options: ["Extra API calls", "Multiple unnecessary DB queries", "Server crash", "Memory leak"], correctIndex: 1 },
    { id: "be-h10", category: "Backend", topic: "Architecture", difficulty: "hard", question: "What is caching mainly used for?", options: ["Security", "Speed improvement", "Routing", "Logging"], correctIndex: 1 },
    { id: "be-h11", category: "Backend", topic: "API", difficulty: "hard", question: "What is idempotent HTTP method?", options: ["Always creates data", "Same result if called multiple times", "Deletes data", "Slows server"], correctIndex: 1 },
    { id: "be-h12", category: "Backend", topic: "API", difficulty: "hard", question: "Which methods are idempotent?", options: ["POST", "GET & PUT", "POST & PATCH", "CONNECT"], correctIndex: 1 },
    { id: "be-h13", category: "Backend", topic: "API", difficulty: "hard", question: "What happens? Promise.all([ fetchData(), fetchData2() ]);", options: ["Runs sequentially", "Runs in parallel", "Blocks thread", "Returns single promise only"], correctIndex: 1 },
    { id: "be-h14", category: "Backend", topic: "Architecture", difficulty: "hard", question: "What is microservices architecture?", options: ["Single large app", "Small independent services", "Database only", "Static site"], correctIndex: 1 },
    { id: "be-h15", category: "Backend", topic: "Security", difficulty: "hard", question: "What is CSRF attack?", options: ["DB injection", "Forcing authenticated user to perform action", "Server overload", "Data encryption"], correctIndex: 1 },
  ],
  DevOps: [
    // --- EASY (15) ---
    { id: "do-e1", category: "DevOps", topic: "CI/CD", difficulty: "easy", question: "What does CI stand for?", options: ["Continuous Integration", "Code Integration", "Central Integration", "Continuous Improvement"], correctIndex: 0 },
    { id: "do-e2", category: "DevOps", topic: "CI/CD", difficulty: "easy", question: "What does CD stand for?", options: ["Code Deployment", "Continuous Deployment/Delivery", "Central Delivery", "Container Delivery"], correctIndex: 1 },
    { id: "do-e3", category: "DevOps", topic: "Containers", difficulty: "easy", question: "What is Docker?", options: ["Programming language", "Container platform", "Database", "Cloud provider"], correctIndex: 1 },
    { id: "do-e4", category: "DevOps", topic: "Containers", difficulty: "easy", question: "What is a container?", options: ["Virtual machine", "Isolated environment to run apps", "Database", "Server"], correctIndex: 1 },
    { id: "do-e5", category: "DevOps", topic: "Cloud", difficulty: "easy", question: "What is cloud computing?", options: ["Local server", "On-demand computing over internet", "Database only", "Browser tool"], correctIndex: 1 },
    { id: "do-e6", category: "DevOps", topic: "Cloud", difficulty: "easy", question: "Which is a cloud provider?", options: ["Docker", "AWS", "Git", "Jenkins"], correctIndex: 1 },
    { id: "do-e7", category: "DevOps", topic: "Version control", difficulty: "easy", question: "What is Git?", options: ["Cloud service", "Version control system", "Container tool", "Database"], correctIndex: 1 },
    { id: "do-e8", category: "DevOps", topic: "Version control", difficulty: "easy", question: "What does 'commit' mean in Git?", options: ["Delete code", "Save a snapshot of changes", "Deploy app", "Run tests"], correctIndex: 1 },
    { id: "do-e9", category: "DevOps", topic: "CI/CD", difficulty: "easy", question: "What is a pipeline?", options: ["Database", "Automated build/test/deploy steps", "Server", "API"], correctIndex: 1 },
    { id: "do-e10", category: "DevOps", topic: "Containers", difficulty: "easy", question: "What is a Docker image?", options: ["Running container", "Template for containers", "Network", "Volume"], correctIndex: 1 },
    { id: "do-e11", category: "DevOps", topic: "Cloud", difficulty: "easy", question: "What is AWS?", options: ["Operating system", "Cloud provider", "Database", "Programming language"], correctIndex: 1 },
    { id: "do-e12", category: "DevOps", topic: "Monitoring", difficulty: "easy", question: "What is monitoring?", options: ["Writing code", "Watching system health and performance", "Deploying app", "Backup only"], correctIndex: 1 },
    { id: "do-e13", category: "DevOps", topic: "Version control", difficulty: "easy", question: "What is a branch in Git?", options: ["Server", "Separate line of development", "Database", "Container"], correctIndex: 1 },
    { id: "do-e14", category: "DevOps", topic: "Security", difficulty: "easy", question: "What are secrets in DevOps?", options: ["Public config", "Sensitive data like passwords and keys", "Log files", "Documentation"], correctIndex: 1 },
    { id: "do-e15", category: "DevOps", topic: "CI/CD", difficulty: "easy", question: "What does 'deploy' mean?", options: ["Write code", "Release app to environment", "Run tests", "Commit code"], correctIndex: 1 },
    // --- INTERMEDIATE (15) ---
    { id: "do-i1", category: "DevOps", topic: "Containers", difficulty: "intermediate", question: "What is Kubernetes?", options: ["Database", "Container orchestration platform", "Cloud provider", "Version control"], correctIndex: 1 },
    { id: "do-i2", category: "DevOps", topic: "Infrastructure", difficulty: "intermediate", question: "What is Infrastructure as Code (IaC)?", options: ["Manual setup", "Defining infrastructure in config files", "Cloud only", "Database schema"], correctIndex: 1 },
    { id: "do-i3", category: "DevOps", topic: "Cloud", difficulty: "intermediate", question: "Which AWS service is used for object storage?", options: ["EC2", "S3", "RDS", "Lambda"], correctIndex: 1 },
    { id: "do-i4", category: "DevOps", topic: "Cloud", difficulty: "intermediate", question: "Which AWS service runs virtual servers?", options: ["S3", "EC2", "RDS", "Lambda"], correctIndex: 1 },
    { id: "do-i5", category: "DevOps", topic: "Containers", difficulty: "intermediate", question: "What is the difference between image and container?", options: ["No difference", "Image is template, container is running instance", "Container is template", "Image runs forever"], correctIndex: 1 },
    { id: "do-i6", category: "DevOps", topic: "CI/CD", difficulty: "intermediate", question: "What does a pipeline do?", options: ["Only runs tests", "Automates build, test, deploy", "Replaces Git", "Manages containers"], correctIndex: 1 },
    { id: "do-i7", category: "DevOps", topic: "Version control", difficulty: "intermediate", question: "What is 'merge' in Git?", options: ["Delete branch", "Combine branches", "Clone repo", "Push code"], correctIndex: 1 },
    { id: "do-i8", category: "DevOps", topic: "Monitoring", difficulty: "intermediate", question: "What is logging?", options: ["Deploying app", "Recording events and errors", "Backup", "Testing"], correctIndex: 1 },
    { id: "do-i9", category: "DevOps", topic: "Security", difficulty: "intermediate", question: "Why should secrets not be in code?", options: ["Slows build", "Security risk if repo is exposed", "Breaks pipeline", "Not needed"], correctIndex: 1 },
    { id: "do-i10", category: "DevOps", topic: "Containers", difficulty: "intermediate", question: "What is Dockerfile?", options: ["Running container", "Instructions to build image", "Network config", "Volume"], correctIndex: 1 },
    { id: "do-i11", category: "DevOps", topic: "Cloud", difficulty: "intermediate", question: "What is serverless?", options: ["No servers", "Provider manages server scaling", "Only frontend", "No backend"], correctIndex: 1 },
    { id: "do-i12", category: "DevOps", topic: "Infrastructure", difficulty: "intermediate", question: "What is Terraform used for?", options: ["Containers", "Infrastructure as Code", "Monitoring", "Logging"], correctIndex: 1 },
    { id: "do-i13", category: "DevOps", topic: "CI/CD", difficulty: "intermediate", question: "What is Jenkins?", options: ["Database", "CI/CD automation server", "Cloud provider", "Container runtime"], correctIndex: 1 },
    { id: "do-i14", category: "DevOps", topic: "Monitoring", difficulty: "intermediate", question: "What is an alert?", options: ["Deploy step", "Notification when something is wrong", "Backup", "Test result"], correctIndex: 1 },
    { id: "do-i15", category: "DevOps", topic: "Containers", difficulty: "intermediate", question: "What is a Docker volume?", options: ["Network", "Persistent storage for containers", "Image", "Container"], correctIndex: 1 },
    // --- HARD (15) ---
    { id: "do-h1", category: "DevOps", topic: "Containers", difficulty: "hard", question: "What is container orchestration?", options: ["Building images", "Managing many containers", "Writing Dockerfile", "Backup"], correctIndex: 1 },
    { id: "do-h2", category: "DevOps", topic: "Cloud", difficulty: "hard", question: "What is auto-scaling?", options: ["Manual scaling", "Automatic adjustment of resources", "Fixed capacity", "Backup only"], correctIndex: 1 },
    { id: "do-h3", category: "DevOps", topic: "Security", difficulty: "hard", question: "What is a vulnerability scan?", options: ["Load test", "Finding security weaknesses", "Deploy check", "Code style check"], correctIndex: 1 },
    { id: "do-h4", category: "DevOps", topic: "CI/CD", difficulty: "hard", question: "What is blue-green deployment?", options: ["Two identical environments, switch traffic", "Single server", "No deployment", "Backup strategy"], correctIndex: 0 },
    { id: "do-h5", category: "DevOps", topic: "Infrastructure", difficulty: "hard", question: "What is a load balancer?", options: ["Database", "Distributes traffic across servers", "Container", "Cache"], correctIndex: 1 },
    { id: "do-h6", category: "DevOps", topic: "Containers", difficulty: "hard", question: "What is a pod in Kubernetes?", options: ["Image", "Smallest deployable unit (one or more containers)", "Volume", "Network"], correctIndex: 1 },
    { id: "do-h7", category: "DevOps", topic: "Monitoring", difficulty: "hard", question: "What is distributed tracing?", options: ["Single log", "Following a request across services", "Backup", "Deploy log"], correctIndex: 1 },
    { id: "do-h8", category: "DevOps", topic: "Cloud", difficulty: "hard", question: "What is multi-region deployment?", options: ["One server", "Running in multiple geographic regions", "Single database", "No redundancy"], correctIndex: 1 },
    { id: "do-h9", category: "DevOps", topic: "Security", difficulty: "hard", question: "What is zero-downtime deployment?", options: ["Restart server", "Deploy without stopping service", "No deploy", "Backup only"], correctIndex: 1 },
    { id: "do-h10", category: "DevOps", topic: "CI/CD", difficulty: "hard", question: "What is rollback?", options: ["Deploy again", "Revert to previous version", "Delete app", "Stop server"], correctIndex: 1 },
    { id: "do-h11", category: "DevOps", topic: "Infrastructure", difficulty: "hard", question: "What is immutable infrastructure?", options: ["Change server in place", "Replace instead of update", "No servers", "Manual only"], correctIndex: 1 },
    { id: "do-h12", category: "DevOps", topic: "Containers", difficulty: "hard", question: "What is Docker Compose?", options: ["Orchestration for clusters", "Multi-container app on single host", "Cloud service", "Database"], correctIndex: 1 },
    { id: "do-h13", category: "DevOps", topic: "Monitoring", difficulty: "hard", question: "What is SLO?", options: ["Server Log Output", "Service Level Objective", "Security Level Option", "Storage Limit Only"], correctIndex: 1 },
    { id: "do-h14", category: "DevOps", topic: "Cloud", difficulty: "hard", question: "What is a VPC?", options: ["Virtual Private Cloud - isolated network", "Container", "Database", "Load balancer"], correctIndex: 0 },
    { id: "do-h15", category: "DevOps", topic: "CI/CD", difficulty: "hard", question: "What is canary deployment?", options: ["Full switch", "Gradual rollout to subset of users", "No deploy", "Backup"], correctIndex: 1 },
  ],
  "App Dev": [
    // --- EASY (15) ---
    { id: "ad-e1", category: "App Dev", topic: "Mobile", difficulty: "easy", question: "What is a mobile app?", options: ["Website", "Application that runs on phones/tablets", "Desktop software", "API only"], correctIndex: 1 },
    { id: "ad-e2", category: "App Dev", topic: "Mobile", difficulty: "easy", question: "What is iOS?", options: ["Android version", "Apple's mobile OS", "Web framework", "Database"], correctIndex: 1 },
    { id: "ad-e3", category: "App Dev", topic: "Mobile", difficulty: "easy", question: "What is Android?", options: ["Apple OS", "Google's mobile OS", "Desktop OS", "Cloud service"], correctIndex: 1 },
    { id: "ad-e4", category: "App Dev", topic: "Mobile", difficulty: "easy", question: "What is an APK?", options: ["Website", "Android app package file", "iOS app", "Database"], correctIndex: 1 },
    { id: "ad-e5", category: "App Dev", topic: "Mobile", difficulty: "easy", question: "What is a hybrid app?", options: ["Only native", "Uses web tech inside native shell", "Only web", "No UI"], correctIndex: 1 },
    { id: "ad-e6", category: "App Dev", topic: "Mobile", difficulty: "easy", question: "What is a native app?", options: ["Website", "Built for specific platform (e.g. Swift for iOS)", "API", "Database"], correctIndex: 1 },
    { id: "ad-e7", category: "App Dev", topic: "Mobile", difficulty: "easy", question: "What does UX mean?", options: ["User Experience", "Universal Export", "Unit Execution", "User Extension"], correctIndex: 0 },
    { id: "ad-e8", category: "App Dev", topic: "Mobile", difficulty: "easy", question: "What is an app store?", options: ["Database", "Place to download apps", "Server", "API"], correctIndex: 1 },
    { id: "ad-e9", category: "App Dev", topic: "Mobile", difficulty: "easy", question: "What is push notification?", options: ["SMS only", "Message sent to device from server", "Email", "In-app only"], correctIndex: 1 },
    { id: "ad-e10", category: "App Dev", topic: "Mobile", difficulty: "easy", question: "What is offline mode?", options: ["No internet ever", "App works without internet", "Slow connection", "WiFi only"], correctIndex: 1 },
    { id: "ad-e11", category: "App Dev", topic: "Mobile", difficulty: "easy", question: "What is an icon?", options: ["Backend", "Image representing the app", "Database", "API"], correctIndex: 1 },
    { id: "ad-e12", category: "App Dev", topic: "Mobile", difficulty: "easy", question: "What is a splash screen?", options: ["Error page", "Initial screen when app opens", "Settings", "Login only"], correctIndex: 1 },
    { id: "ad-e13", category: "App Dev", topic: "Mobile", difficulty: "easy", question: "What is responsive design?", options: ["Desktop only", "Layout adapts to screen size", "Mobile only", "No layout"], correctIndex: 1 },
    { id: "ad-e14", category: "App Dev", topic: "Mobile", difficulty: "easy", question: "What is an emulator?", options: ["Real device", "Software that mimics a device", "Server", "Database"], correctIndex: 1 },
    { id: "ad-e15", category: "App Dev", topic: "Mobile", difficulty: "easy", question: "What is debugging?", options: ["Designing UI", "Finding and fixing errors", "Deploying", "Backup"], correctIndex: 1 },
    // --- INTERMEDIATE (15) ---
    { id: "ad-i1", category: "App Dev", topic: "Mobile", difficulty: "intermediate", question: "What is React Native?", options: ["Backend framework", "Framework to build mobile apps with JavaScript", "Database", "Cloud service"], correctIndex: 1 },
    { id: "ad-i2", category: "App Dev", topic: "Mobile", difficulty: "intermediate", question: "What is Flutter?", options: ["Database", "Google's framework for cross-platform apps", "API tool", "Server"], correctIndex: 1 },
    { id: "ad-i3", category: "App Dev", topic: "Mobile", difficulty: "intermediate", question: "What is a state in app development?", options: ["Server", "Data that determines what is shown", "Database", "API"], correctIndex: 1 },
    { id: "ad-i4", category: "App Dev", topic: "Mobile", difficulty: "intermediate", question: "What is an API call in an app?", options: ["UI element", "Request to backend for data", "Database", "Icon"], correctIndex: 1 },
    { id: "ad-i5", category: "App Dev", topic: "Mobile", difficulty: "intermediate", question: "What is local storage on device?", options: ["Cloud only", "Storing data on the device", "API", "Server"], correctIndex: 1 },
    { id: "ad-i6", category: "App Dev", topic: "Mobile", difficulty: "intermediate", question: "What is a lifecycle in app?", options: ["Database", "Stages like create, show, hide, destroy", "API", "Server"], correctIndex: 1 },
    { id: "ad-i7", category: "App Dev", topic: "Mobile", difficulty: "intermediate", question: "What is a navigation stack?", options: ["Database", "Stack of screens user can go back through", "API", "Server"], correctIndex: 1 },
    { id: "ad-i8", category: "App Dev", topic: "Mobile", difficulty: "intermediate", question: "What is deep linking?", options: ["In-app only", "Opening app to specific screen via URL", "API", "Database"], correctIndex: 1 },
    { id: "ad-i9", category: "App Dev", topic: "Mobile", difficulty: "intermediate", question: "What is a widget?", options: ["Backend", "Reusable UI component", "Database", "API"], correctIndex: 1 },
    { id: "ad-i10", category: "App Dev", topic: "Mobile", difficulty: "intermediate", question: "What is permission in mobile app?", options: ["API key", "User allowing app to access camera/location etc", "Database", "Server"], correctIndex: 1 },
    { id: "ad-i11", category: "App Dev", topic: "Mobile", difficulty: "intermediate", question: "What is OTA update?", options: ["Over-the-air update without store", "Only store update", "Database update", "API change"], correctIndex: 0 },
    { id: "ad-i12", category: "App Dev", topic: "Mobile", difficulty: "intermediate", question: "What is a build in app dev?", options: ["Design", "Compiled version of the app", "API", "Database"], correctIndex: 1 },
    { id: "ad-i13", category: "App Dev", topic: "Mobile", difficulty: "intermediate", question: "What is a release build?", options: ["Debug version", "Optimized version for production", "Test only", "Development build"], correctIndex: 1 },
    { id: "ad-i14", category: "App Dev", topic: "Mobile", difficulty: "intermediate", question: "What is crash reporting?", options: ["Backup", "Collecting crash reports from users", "API", "Database"], correctIndex: 1 },
    { id: "ad-i15", category: "App Dev", topic: "Mobile", difficulty: "intermediate", question: "What is beta testing?", options: ["Production release", "Testing with limited users before full release", "No testing", "Internal only"], correctIndex: 1 },
    // --- HARD (15) ---
    { id: "ad-h1", category: "App Dev", topic: "Mobile", difficulty: "hard", question: "What is memory leak in mobile app?", options: ["Low storage", "Memory not freed, app slows or crashes", "No RAM", "Cache only"], correctIndex: 1 },
    { id: "ad-h2", category: "App Dev", topic: "Mobile", difficulty: "hard", question: "What is battery optimization impact?", options: ["No impact", "Background limits can affect app behavior", "Only for games", "Not relevant"], correctIndex: 1 },
    { id: "ad-h3", category: "App Dev", topic: "Mobile", difficulty: "hard", question: "What is ProGuard/R8?", options: ["Database", "Code shrinking and obfuscation", "API", "UI tool"], correctIndex: 1 },
    { id: "ad-h4", category: "App Dev", topic: "Mobile", difficulty: "hard", question: "What is A/B testing in apps?", options: ["Backup", "Testing two variants with users", "Single version", "No testing"], correctIndex: 1 },
    { id: "ad-h5", category: "App Dev", topic: "Mobile", difficulty: "hard", question: "What is lazy loading?", options: ["Load everything at once", "Load data when needed", "No loading", "Cache only"], correctIndex: 1 },
    { id: "ad-h6", category: "App Dev", topic: "Mobile", difficulty: "hard", question: "What is background execution limit?", options: ["No limit", "OS restricting background work", "Only for games", "Database limit"], correctIndex: 1 },
    { id: "ad-h7", category: "App Dev", topic: "Mobile", difficulty: "hard", question: "What is code signing?", options: ["Writing code", "Proving app authenticity", "Database", "API"], correctIndex: 1 },
    { id: "ad-h8", category: "App Dev", topic: "Mobile", difficulty: "hard", question: "What is in-app purchase?", options: ["Free only", "Buying content/subscription inside app", "External link", "No payment"], correctIndex: 1 },
    { id: "ad-h9", category: "App Dev", topic: "Mobile", difficulty: "hard", question: "What is analytics in app?", options: ["Backup", "Tracking user behavior and events", "Database", "API only"], correctIndex: 1 },
    { id: "ad-h10", category: "App Dev", topic: "Mobile", difficulty: "hard", question: "What is accessibility in app?", options: ["Faster app", "Making app usable for people with disabilities", "Design only", "Optional"], correctIndex: 1 },
    { id: "ad-h11", category: "App Dev", topic: "Mobile", difficulty: "hard", question: "What is a bridge in React Native?", options: ["Database", "Connection between JS and native code", "API", "Server"], correctIndex: 1 },
    { id: "ad-h12", category: "App Dev", topic: "Mobile", difficulty: "hard", question: "What is hot reload?", options: ["Restart app", "Update UI without full restart", "Database update", "API change"], correctIndex: 1 },
    { id: "ad-h13", category: "App Dev", topic: "Mobile", difficulty: "hard", question: "What is native module?", options: ["JS only", "Native code used by cross-platform framework", "Database", "API"], correctIndex: 1 },
    { id: "ad-h14", category: "App Dev", topic: "Mobile", difficulty: "hard", question: "What is store listing optimization?", options: ["Code optimization", "Improving app visibility in store", "Database", "API"], correctIndex: 1 },
    { id: "ad-h15", category: "App Dev", topic: "Mobile", difficulty: "hard", question: "What is CI/CD for mobile?", options: ["Manual only", "Automated build and release of app", "Database", "No automation"], correctIndex: 1 },
  ],
};

const DIFFICULTY_ORDER = ["easy", "intermediate", "hard"];

/** Ensure every question has a difficulty (default intermediate) */
function withDifficulty(q) {
  return { ...q, difficulty: q.difficulty || "intermediate" };
}

/** Map skill declaration choices to question categories */
export function getCategoriesFromDeclaration(declaredSkills) {
  const categories = [];
  if (declaredSkills.includes("Frontend")) {
    categories.push("Frontend");
  }
  if (declaredSkills.includes("App Dev Frontend")) {
    categories.push("App Dev");
  }
  if (declaredSkills.includes("Backend")) {
    categories.push("Backend");
  }
  if (declaredSkills.includes("DevOps")) {
    categories.push("DevOps");
  }
  return [...new Set(categories)];
}

/** Get flat list of questions for selected categories (fixed order, for non-adaptive use) */
export function getQuestionsForCategories(declaredSkills) {
  const categories = getCategoriesFromDeclaration(declaredSkills);
  if (categories.length === 0) {
    categories.push("Frontend", "Backend", "DevOps", "App Dev");
  }
  const list = [];
  categories.forEach((cat) => {
    (QUIZ_QUESTIONS[cat] || []).forEach((q) => list.push(withDifficulty(q)));
  });
  return list;
}

/**
 * Build question pool by difficulty for adaptive quiz.
 * Returns { easy: [], intermediate: [], hard: [] } (questions have .category and .difficulty).
 */
export function getQuestionPoolByDifficulty(declaredSkills) {
  const categories = getCategoriesFromDeclaration(declaredSkills);
  if (categories.length === 0) {
    categories.push("Frontend", "Backend", "DevOps", "App Dev");
  }
  const pool = { easy: [], intermediate: [], hard: [] };
  categories.forEach((cat) => {
    (QUIZ_QUESTIONS[cat] || []).forEach((q) => {
      const qq = withDifficulty(q);
      if (pool[qq.difficulty]) pool[qq.difficulty].push(qq);
    });
  });
  return pool;
}

/**
 * Pick next question for adaptive quiz: from pool at current difficulty, not in askedIds.
 * Falls back to other difficulties if current has none left.
 */
export function getNextAdaptiveQuestion(pool, currentDifficulty, askedIds, categories) {
  const order = [currentDifficulty, ...DIFFICULTY_ORDER.filter((d) => d !== currentDifficulty)];
  for (const diff of order) {
    const candidates = (pool[diff] || []).filter(
      (q) => !askedIds.has(q.id) && categories.includes(q.category)
    );
    if (candidates.length > 0) {
      return candidates[Math.floor(Math.random() * candidates.length)];
    }
  }
  return null;
}

export const ADAPTIVE_CONFIG = {
  maxQuestions: 15,
  correctStreakToLevelUp: 2,
  wrongStreakToLevelDown: 2,
};

/** Bump difficulty up (easy -> intermediate -> hard) or down */
export function adjustDifficulty(current, direction) {
  const i = DIFFICULTY_ORDER.indexOf(current);
  if (i === -1) return "intermediate";
  if (direction === "up") return DIFFICULTY_ORDER[Math.min(i + 1, DIFFICULTY_ORDER.length - 1)];
  if (direction === "down") return DIFFICULTY_ORDER[Math.max(i - 1, 0)];
  return current;
}

const PASS_THRESHOLD = 0.7; // 70% correct to "pass" a category or topic

/**
 * Build detailed learning roadmap from quiz results.
 * Returns list of categories that need improvement, each with:
 * - overall score
 * - focusAreas: specific topics (e.g. Database, API, Querying) with scores and what to study
 */
export function getRoadmapFromQuizResults(verificationResults, declaredSkills) {
  const categories = getCategoriesFromDeclaration(declaredSkills);
  if (categories.length === 0) {
    categories.push("Frontend", "Backend", "DevOps", "App Dev");
  }

  const roadmap = [];
  categories.forEach((category) => {
    const allQuestions = QUIZ_QUESTIONS[category] || [];
    const questions = allQuestions.filter((q) => Object.prototype.hasOwnProperty.call(verificationResults, q.id));
    if (questions.length === 0) {
      roadmap.push({
        name: category,
        priority: "must-have",
        depth: "intermediate",
        score: 0,
        total: 0,
        passed: false,
        reason: "No questions attempted",
        focusAreas: [],
      });
      return;
    }

    let correct = 0;
    const byTopic = {};
    questions.forEach((q) => {
      const topic = q.topic || "General";
      if (!byTopic[topic]) byTopic[topic] = { correct: 0, total: 0 };
      byTopic[topic].total += 1;
      if (verificationResults[q.id] === true) {
        correct += 1;
        byTopic[topic].correct += 1;
      }
    });
    const total = questions.length;
    const passed = total > 0 && correct / total >= PASS_THRESHOLD;

    const focusAreas = Object.entries(byTopic)
      .map(([topic, { correct: c, total: t }]) => ({
        topic,
        score: c,
        total: t,
        passed: t > 0 && c / t >= PASS_THRESHOLD,
        suggestion: getTopicSuggestion(category, topic, c, t),
      }))
      .filter((a) => !a.passed || a.total > 0)
      .sort((a, b) => a.score / (a.total || 1) - b.score / (b.total || 1));

    if (!passed || focusAreas.some((a) => !a.passed)) {
      roadmap.push({
        name: category,
        priority: "must-have",
        depth: correct < total * 0.5 ? "intermediate" : "basic",
        score: correct,
        total,
        passed: false,
        reason: `${correct}/${total} correct — focus on the areas below`,
        focusAreas: focusAreas.filter((a) => !a.passed),
      });
    }
  });

  return roadmap;
}

function getTopicSuggestion(category, topic, score, total) {
  if (total === 0) return "No questions in this area yet.";
  const pct = Math.round((score / total) * 100);
  const study = {
    Frontend: {
      React: "Review React reconciliation, hooks (useEffect), and hydration.",
      "React & state": "Review Context API and when to use external state.",
      HTML: "Review HTML tags, links, and document structure.",
      "HTML/CSS": "Review linking CSS and basic styling.",
      CSS: "Review layout (Flexbox, Grid), position, and units (rem, px).",
      JavaScript: "Review operators, arrays, closures, and typeof.",
      DOM: "Review events, bubbling, and preventDefault.",
      Web: "Review CORS and browser security.",
    },
    Backend: {
      "API design": "Review REST semantics, idempotency, and HTTP methods.",
      API: "Review REST, HTTP methods, middleware, rate limiting, and stateless design.",
      "API & security": "Review JWT tradeoffs and token revocation strategies.",
      "API & async": "Review message queues (Kafka/RabbitMQ) and async patterns.",
      Database: "Review indexing, N+1, transactions, ACID, and normalization.",
      "Database & querying": "Review JOIN optimization, N+1 problem, and eager loading.",
      "Database & transactions": "Review isolation levels and dirty reads.",
      "Distributed systems": "Review CAP theorem and consistency vs availability.",
      Architecture: "Review horizontal/vertical scaling, stateless design, and microservices.",
      Security: "Review hashing, JWT, CORS, bcrypt, SQL injection, and CSRF.",
    },
    DevOps: {
      "CI/CD": "Review pipeline goals: build, test, deploy automation.",
      Containers: "Review Docker images, containers, Dockerfile, volumes, and Kubernetes.",
      "Containers & orchestration": "Review Kubernetes, pods, and scheduling.",
      Cloud: "Review AWS (S3, EC2), serverless, auto-scaling, VPC, and multi-region.",
      "Version control": "Review Git commit, branch, and merge.",
      Monitoring: "Review logging, alerts, SLOs, and distributed tracing.",
      Infrastructure: "Review IaC, Terraform, load balancers, and immutable infrastructure.",
      Security: "Review secrets management and vulnerability scanning.",
      Deployment: "Review blue-green, canary, rollback, and zero-downtime releases.",
    },
    "App Dev": {
      Mobile: "Review native vs hybrid apps, React Native/Flutter, lifecycle, permissions, and store releases.",
    },
  };
  const text = (study[category] && study[category][topic]) || `Focus on ${topic} to improve.`;
  return `${score}/${total} (${pct}%) — ${text}`;
}
