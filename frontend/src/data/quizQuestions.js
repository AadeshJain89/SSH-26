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
  "Power BI": [
    { id: "pbi-e1", category: "Power BI", topic: "BI", difficulty: "easy", question: "What is Business Intelligence?", options: ["Programming language", "Tools & processes to analyze business data", "Marketing strategy", "Cloud service"], correctIndex: 1 },
    { id: "pbi-e2", category: "Power BI", topic: "BI", difficulty: "easy", question: "Which tool is commonly used in BI?", options: ["Photoshop", "Power BI", "VS Code", "Docker"], correctIndex: 1 },
    { id: "pbi-e3", category: "Power BI", topic: "BI", difficulty: "easy", question: "What does KPI stand for?", options: ["Key Performance Indicator", "Knowledge Process Input", "Key Product Integration", "Known Performance Index"], correctIndex: 0 },
    { id: "pbi-e4", category: "Power BI", topic: "BI", difficulty: "easy", question: "What is a dashboard?", options: ["Database", "Visual display of metrics", "Server", "Programming language"], correctIndex: 1 },
    { id: "pbi-e5", category: "Power BI", topic: "BI", difficulty: "easy", question: "Which SQL clause filters rows?", options: ["SELECT", "WHERE", "GROUP BY", "ORDER BY"], correctIndex: 1 },
    { id: "pbi-e6", category: "Power BI", topic: "BI", difficulty: "easy", question: "What is ETL?", options: ["Extract, Transform, Load", "Edit, Transfer, Link", "Execute, Test, Launch", "Evaluate, Track, Learn"], correctIndex: 0 },
    { id: "pbi-e7", category: "Power BI", topic: "BI", difficulty: "easy", question: "Which chart shows trends over time?", options: ["Pie chart", "Line chart", "Bar chart", "Scatter plot"], correctIndex: 1 },
    { id: "pbi-e8", category: "Power BI", topic: "BI", difficulty: "easy", question: "What is a data warehouse?", options: ["Excel sheet", "Centralized data repository", "Cloud server", "Chart tool"], correctIndex: 1 },
    { id: "pbi-e9", category: "Power BI", topic: "BI", difficulty: "easy", question: "What does GROUP BY do?", options: ["Sort data", "Combine rows with similar values", "Delete duplicates", "Filter records"], correctIndex: 1 },
    { id: "pbi-e10", category: "Power BI", topic: "BI", difficulty: "easy", question: "What is data cleaning?", options: ["Deleting all data", "Removing errors & inconsistencies", "Compressing data", "Encrypting data"], correctIndex: 1 },
    { id: "pbi-e11", category: "Power BI", topic: "BI", difficulty: "easy", question: "What is a fact table?", options: ["Contains descriptive attributes", "Contains measurable metrics", "Contains indexes", "Stores logs"], correctIndex: 1 },
    { id: "pbi-e12", category: "Power BI", topic: "BI", difficulty: "easy", question: "What is a dimension table?", options: ["Contains metrics", "Contains descriptive data", "Contains passwords", "Contains queries"], correctIndex: 1 },
    { id: "pbi-e13", category: "Power BI", topic: "BI", difficulty: "easy", question: "What does AVG() function do?", options: ["Count rows", "Average values", "Sum values", "Filter data"], correctIndex: 1 },
    { id: "pbi-e14", category: "Power BI", topic: "BI", difficulty: "easy", question: "Which is NOT a BI tool?", options: ["Tableau", "Power BI", "MySQL", "Looker"], correctIndex: 2 },
    { id: "pbi-e15", category: "Power BI", topic: "BI", difficulty: "easy", question: "What is data visualization?", options: ["Database storage", "Graphical representation of data", "Data encryption", "Data compression"], correctIndex: 1 },
    { id: "pbi-i1", category: "Power BI", topic: "BI", difficulty: "intermediate", question: "What is Star Schema?", options: ["Flat database", "Fact table connected to dimension tables", "Single table model", "API structure"], correctIndex: 1 },
    { id: "pbi-i2", category: "Power BI", topic: "BI", difficulty: "intermediate", question: "What is Snowflake Schema?", options: ["Fully denormalized", "Normalized dimension tables", "Flat structure", "API format"], correctIndex: 1 },
    { id: "pbi-i3", category: "Power BI", topic: "BI", difficulty: "intermediate", question: "What is normalization?", options: ["Removing redundancy", "Adding redundancy", "Sorting data", "Visualizing data"], correctIndex: 0 },
    { id: "pbi-i4", category: "Power BI", topic: "BI", difficulty: "intermediate", question: "What does COUNT(DISTINCT column) do?", options: ["Count all rows", "Count unique values", "Count duplicates", "Count NULLs"], correctIndex: 1 },
    { id: "pbi-i5", category: "Power BI", topic: "BI", difficulty: "intermediate", question: "What is wrong? SELECT name, SUM(sales) FROM orders;", options: ["Syntax error", "Missing GROUP BY", "Wrong table", "Extra comma"], correctIndex: 1 },
    { id: "pbi-i6", category: "Power BI", topic: "BI", difficulty: "intermediate", question: "What is a KPI for revenue growth?", options: ["Total Employees", "Revenue % change month over month", "Server uptime", "Data size"], correctIndex: 1 },
    { id: "pbi-i7", category: "Power BI", topic: "BI", difficulty: "intermediate", question: "What is drill-down in dashboards?", options: ["Delete data", "View detailed data from summary", "Sort data", "Compress report"], correctIndex: 1 },
    { id: "pbi-i8", category: "Power BI", topic: "BI", difficulty: "intermediate", question: "What is the output of SELECT COUNT(*) FROM sales WHERE amount > 100;?", options: ["Sum of amounts", "Number of rows with amount > 100", "Unique values", "Average"], correctIndex: 1 },
    { id: "pbi-i9", category: "Power BI", topic: "BI", difficulty: "intermediate", question: "What is data granularity?", options: ["Data size", "Level of detail", "Chart type", "Indexing"], correctIndex: 1 },
    { id: "pbi-i10", category: "Power BI", topic: "BI", difficulty: "intermediate", question: "What is a calculated column?", options: ["Predefined column", "Derived from existing data", "External column", "API column"], correctIndex: 1 },
    { id: "pbi-i11", category: "Power BI", topic: "BI", difficulty: "intermediate", question: "Identify issue: SELECT department, AVG(salary) FROM employees GROUP BY salary;", options: ["Syntax error", "Wrong grouping column", "Missing WHERE", "No issue"], correctIndex: 1 },
    { id: "pbi-i12", category: "Power BI", topic: "BI", difficulty: "intermediate", question: "What is a slowly changing dimension (SCD)?", options: ["Fast database", "Handling changes in dimension data over time", "Deleting data", "Static schema"], correctIndex: 1 },
    { id: "pbi-i13", category: "Power BI", topic: "BI", difficulty: "intermediate", question: "What is data blending?", options: ["Merging data from multiple sources", "Deleting duplicates", "Encrypting data", "Compressing data"], correctIndex: 0 },
    { id: "pbi-i14", category: "Power BI", topic: "BI", difficulty: "intermediate", question: "What is a measure in BI?", options: ["Descriptive attribute", "Numeric value used in calculations", "Database key", "Filter"], correctIndex: 1 },
    { id: "pbi-i15", category: "Power BI", topic: "BI", difficulty: "intermediate", question: "What is row-level security?", options: ["Encryption", "Restricting access to specific rows", "Indexing", "Compression"], correctIndex: 1 },
    { id: "pbi-h1", category: "Power BI", topic: "BI", difficulty: "hard", question: "What is the purpose of indexing?", options: ["Increase redundancy", "Improve query performance", "Reduce data size", "Encrypt data"], correctIndex: 1 },
    { id: "pbi-h2", category: "Power BI", topic: "BI", difficulty: "hard", question: "What causes double counting in BI?", options: ["Proper joins", "Incorrect joins in fact tables", "Indexing", "Filtering"], correctIndex: 1 },
    { id: "pbi-h3", category: "Power BI", topic: "BI", difficulty: "hard", question: "What is a bridge table used for?", options: ["Networking", "Handling many-to-many relationships", "Compression", "Security"], correctIndex: 1 },
    { id: "pbi-h4", category: "Power BI", topic: "BI", difficulty: "hard", question: "What is wrong? SELECT * FROM orders WHERE order_date = '2024';", options: ["Date comparison incorrect", "Syntax error", "Missing SELECT", "No issue"], correctIndex: 0 },
    { id: "pbi-h5", category: "Power BI", topic: "BI", difficulty: "hard", question: "What is partitioning used for?", options: ["Visual design", "Query performance optimization", "Security", "API"], correctIndex: 1 },
    { id: "pbi-h6", category: "Power BI", topic: "BI", difficulty: "hard", question: "What is data lineage?", options: ["Family of tables", "Tracking data origin and transformations", "Data compression", "Sorting"], correctIndex: 1 },
    { id: "pbi-h7", category: "Power BI", topic: "BI", difficulty: "hard", question: "What is incremental load in ETL?", options: ["Reload all data", "Load only new/changed records", "Delete old data", "Compress data"], correctIndex: 1 },
    { id: "pbi-h8", category: "Power BI", topic: "BI", difficulty: "hard", question: "Identify problem: SELECT region, SUM(sales) FROM sales JOIN customers ON sales.id = customers.id;", options: ["Possible wrong join condition", "Syntax error", "Missing WHERE", "No issue"], correctIndex: 0 },
    { id: "pbi-h9", category: "Power BI", topic: "BI", difficulty: "hard", question: "What is data mart?", options: ["Small data warehouse for specific department", "Index", "API", "Visualization"], correctIndex: 0 },
    { id: "pbi-h10", category: "Power BI", topic: "BI", difficulty: "hard", question: "What is a KPI vs Metric difference?", options: ["No difference", "KPI is strategic metric", "Metric is always strategic", "KPI is raw data"], correctIndex: 1 },
    { id: "pbi-h11", category: "Power BI", topic: "BI", difficulty: "hard", question: "What is dimensional modeling?", options: ["Data encryption", "Structuring data for analytics", "API design", "Network design"], correctIndex: 1 },
    { id: "pbi-h12", category: "Power BI", topic: "BI", difficulty: "hard", question: "What is surrogate key?", options: ["Natural key", "Artificial primary key", "Foreign key", "Index"], correctIndex: 1 },
    { id: "pbi-h13", category: "Power BI", topic: "BI", difficulty: "hard", question: "What is cardinality in BI?", options: ["Chart type", "Relationship count between tables", "Index", "API"], correctIndex: 1 },
    { id: "pbi-h14", category: "Power BI", topic: "BI", difficulty: "hard", question: "What is data governance?", options: ["Visualization", "Data management policies & standards", "Chart tool", "Database engine"], correctIndex: 1 },
    { id: "pbi-h15", category: "Power BI", topic: "BI", difficulty: "hard", question: "What causes dashboard performance issues?", options: ["Optimized queries", "Too many visuals & heavy queries", "Indexing", "Partitioning"], correctIndex: 1 },
  ],
  Blockchain: [
    { id: "blk-e1", category: "Blockchain", topic: "Blockchain", difficulty: "easy", question: "What is a blockchain?", options: ["A type of database", "A centralized ledger", "A distributed ledger", "A programming language"], correctIndex: 2 },
    { id: "blk-e2", category: "Blockchain", topic: "Blockchain", difficulty: "easy", question: "What is a block?", options: ["A database server", "A group of transactions", "A smart contract", "A wallet"], correctIndex: 1 },
    { id: "blk-e3", category: "Blockchain", topic: "Blockchain", difficulty: "easy", question: "What links blocks together?", options: ["IP address", "Hash of previous block", "Smart contract", "Token"], correctIndex: 1 },
    { id: "blk-e4", category: "Blockchain", topic: "Blockchain", difficulty: "easy", question: "What is cryptocurrency?", options: ["Digital currency secured by cryptography", "Bank account", "Cloud storage", "Database"], correctIndex: 0 },
    { id: "blk-e5", category: "Blockchain", topic: "Blockchain", difficulty: "easy", question: "What is a wallet?", options: ["Database", "Stores private/public keys", "Mining tool", "Smart contract"], correctIndex: 1 },
    { id: "blk-e6", category: "Blockchain", topic: "Blockchain", difficulty: "easy", question: "What is mining?", options: ["UI development", "Validating transactions & adding blocks", "Encrypting wallet", "Token burning"], correctIndex: 1 },
    { id: "blk-e7", category: "Blockchain", topic: "Blockchain", difficulty: "easy", question: "What is decentralization?", options: ["One authority", "Distributed control", "Server backup", "API system"], correctIndex: 1 },
    { id: "blk-e8", category: "Blockchain", topic: "Blockchain", difficulty: "easy", question: "What is a smart contract?", options: ["Legal document", "Self-executing code on blockchain", "Wallet", "Token"], correctIndex: 1 },
    { id: "blk-e9", category: "Blockchain", topic: "Blockchain", difficulty: "easy", question: "Which is a blockchain platform?", options: ["Ethereum", "React", "MySQL", "Docker"], correctIndex: 0 },
    { id: "blk-e10", category: "Blockchain", topic: "Blockchain", difficulty: "easy", question: "What is gas in Ethereum?", options: ["Physical fuel", "Transaction fee", "Mining hardware", "Token supply"], correctIndex: 1 },
    { id: "blk-e11", category: "Blockchain", topic: "Blockchain", difficulty: "easy", question: "What is public key used for?", options: ["Decryption only", "Receiving transactions", "Mining", "Hashing blocks"], correctIndex: 1 },
    { id: "blk-e12", category: "Blockchain", topic: "Blockchain", difficulty: "easy", question: "What is private key used for?", options: ["Share publicly", "Sign transactions", "Mining", "Hashing"], correctIndex: 1 },
    { id: "blk-e13", category: "Blockchain", topic: "Blockchain", difficulty: "easy", question: "What is token?", options: ["Database entry", "Digital asset on blockchain", "Wallet", "Hash"], correctIndex: 1 },
    { id: "blk-e14", category: "Blockchain", topic: "Blockchain", difficulty: "easy", question: "What is peer-to-peer network?", options: ["Central server", "Nodes communicate directly", "Cloud storage", "API"], correctIndex: 1 },
    { id: "blk-e15", category: "Blockchain", topic: "Blockchain", difficulty: "easy", question: "In Solidity, function setValue(uint _value) _____ { value = _value; } — what is missing?", options: ["external", "private", "public", "internal"], correctIndex: 2 },
    { id: "blk-i1", category: "Blockchain", topic: "Blockchain", difficulty: "intermediate", question: "What is consensus mechanism?", options: ["UI agreement", "Method to agree on block validity", "Wallet system", "Encryption method"], correctIndex: 1 },
    { id: "blk-i2", category: "Blockchain", topic: "Blockchain", difficulty: "intermediate", question: "What is Proof of Work (PoW)?", options: ["Voting system", "Mining via computational power", "Staking tokens", "Database replication"], correctIndex: 1 },
    { id: "blk-i3", category: "Blockchain", topic: "Blockchain", difficulty: "intermediate", question: "What is Proof of Stake (PoS)?", options: ["Mining with GPU", "Validator selection based on stake", "Cloud hosting", "Token burning"], correctIndex: 1 },
    { id: "blk-i4", category: "Blockchain", topic: "Blockchain", difficulty: "intermediate", question: "What is a node?", options: ["Wallet", "Participant maintaining blockchain copy", "Token", "API"], correctIndex: 1 },
    { id: "blk-i5", category: "Blockchain", topic: "Blockchain", difficulty: "intermediate", question: "What is 51% attack?", options: ["Network upgrade", "Majority control attack", "Wallet hack", "Gas spike"], correctIndex: 1 },
    { id: "blk-i6", category: "Blockchain", topic: "Blockchain", difficulty: "intermediate", question: "What is hash function property?", options: ["Reversible", "Deterministic & one-way", "Encrypted", "Random"], correctIndex: 1 },
    { id: "blk-i7", category: "Blockchain", topic: "Blockchain", difficulty: "intermediate", question: "What is wrong? msg.sender.transfer(1 ether);", options: ["Nothing", "transfer is outdated for safety", "msg.sender invalid", "ether invalid"], correctIndex: 1 },
    { id: "blk-i8", category: "Blockchain", topic: "Blockchain", difficulty: "intermediate", question: "What is nonce?", options: ["Token", "Number used once in mining", "Gas fee", "Wallet"], correctIndex: 1 },
    { id: "blk-i9", category: "Blockchain", topic: "Blockchain", difficulty: "intermediate", question: "What is DeFi?", options: ["Central banking", "Decentralized finance apps", "Mining hardware", "Token burning"], correctIndex: 1 },
    { id: "blk-i10", category: "Blockchain", topic: "Blockchain", difficulty: "intermediate", question: "What is NFT?", options: ["Fungible token", "Unique digital asset", "Gas fee", "Smart contract bug"], correctIndex: 1 },
    { id: "blk-i11", category: "Blockchain", topic: "Blockchain", difficulty: "intermediate", question: "What is ERC-20?", options: ["Blockchain", "Token standard", "Mining protocol", "Wallet"], correctIndex: 1 },
    { id: "blk-i12", category: "Blockchain", topic: "Blockchain", difficulty: "intermediate", question: "What is ERC-721?", options: ["Fungible token standard", "NFT standard", "Gas type", "Mining algorithm"], correctIndex: 1 },
    { id: "blk-i13", category: "Blockchain", topic: "Blockchain", difficulty: "intermediate", question: "What happens? uint a = 5; uint b = 0; uint c = a / b;", options: ["0", "5", "Error (division by zero)", "Undefined"], correctIndex: 2 },
    { id: "blk-i14", category: "Blockchain", topic: "Blockchain", difficulty: "intermediate", question: "What is gas limit?", options: ["Max fee per transaction", "Maximum computation allowed", "Token supply", "Block size"], correctIndex: 1 },
    { id: "blk-i15", category: "Blockchain", topic: "Blockchain", difficulty: "intermediate", question: "What is Layer 2?", options: ["Database", "Scaling solution built on main chain", "Wallet", "Mining pool"], correctIndex: 1 },
    { id: "blk-h1", category: "Blockchain", topic: "Blockchain", difficulty: "hard", question: "What is reentrancy attack?", options: ["Gas fee attack", "Contract calls itself repeatedly before state update", "Wallet hack", "51% attack"], correctIndex: 1 },
    { id: "blk-h2", category: "Blockchain", topic: "Blockchain", difficulty: "hard", question: "What is front-running?", options: ["Mining faster", "Exploiting transaction ordering", "Token minting", "NFT creation"], correctIndex: 1 },
    { id: "blk-h3", category: "Blockchain", topic: "Blockchain", difficulty: "hard", question: "What is wrong? Withdraw: msg.sender.call{value: balance[msg.sender]}(\"\"); balance[msg.sender] = 0;", options: ["Nothing", "State updated after transfer (reentrancy risk)", "require invalid", "call invalid"], correctIndex: 1 },
    { id: "blk-h4", category: "Blockchain", topic: "Blockchain", difficulty: "hard", question: "What is Merkle Tree used for?", options: ["UI tree", "Efficient transaction verification", "Gas calculation", "Wallet storage"], correctIndex: 1 },
    { id: "blk-h5", category: "Blockchain", topic: "Blockchain", difficulty: "hard", question: "What is Byzantine Fault Tolerance?", options: ["UI fault", "System tolerates malicious nodes", "Gas error", "Token burn"], correctIndex: 1 },
    { id: "blk-h6", category: "Blockchain", topic: "Blockchain", difficulty: "hard", question: "What is sharding?", options: ["Token split", "Splitting blockchain into partitions", "Wallet copy", "Mining method"], correctIndex: 1 },
    { id: "blk-h7", category: "Blockchain", topic: "Blockchain", difficulty: "hard", question: "What is slashing in PoS?", options: ["Gas reduction", "Penalty for malicious validators", "Token mint", "Mining pool"], correctIndex: 1 },
    { id: "blk-h8", category: "Blockchain", topic: "Blockchain", difficulty: "hard", question: "What does emit ValueChanged(_value) do?", options: ["Deletes value", "Emits blockchain event log", "Transfers Ether", "Mines block"], correctIndex: 1 },
    { id: "blk-h9", category: "Blockchain", topic: "Blockchain", difficulty: "hard", question: "What is oracle in blockchain?", options: ["Database", "External data provider", "Token standard", "Wallet"], correctIndex: 1 },
    { id: "blk-h10", category: "Blockchain", topic: "Blockchain", difficulty: "hard", question: "What is immutable in blockchain context?", options: ["Editable data", "Cannot be altered after confirmation", "Gas change", "Token supply"], correctIndex: 1 },
    { id: "blk-h11", category: "Blockchain", topic: "Blockchain", difficulty: "hard", question: "What is rollup?", options: ["Token merge", "Batch transactions off-chain", "Wallet reset", "Mining type"], correctIndex: 1 },
    { id: "blk-h12", category: "Blockchain", topic: "Blockchain", difficulty: "hard", question: "What is zk-proof?", options: ["Encryption", "Zero-knowledge proof", "Token", "Gas"], correctIndex: 1 },
    { id: "blk-h13", category: "Blockchain", topic: "Blockchain", difficulty: "hard", question: "Best practice for secure transfer?", options: ["msg.sender.transfer(amount)", "(bool success, ) = msg.sender.call{value: amount}(\"\"); require(success);", "msg.sender.send(amount);", "amount = 0;"], correctIndex: 1 },
    { id: "blk-h14", category: "Blockchain", topic: "Blockchain", difficulty: "hard", question: "What is governance token?", options: ["Gas token", "Voting rights in protocol", "Mining tool", "Wallet"], correctIndex: 1 },
    { id: "blk-h15", category: "Blockchain", topic: "Blockchain", difficulty: "hard", question: "What is blockchain trilemma?", options: ["Security only", "Security, Scalability, Decentralization trade-off", "Gas issue", "Token inflation"], correctIndex: 1 },
  ],
  "Cyber Security": [
    { id: "cyb-e1", category: "Cyber Security", topic: "Security", difficulty: "easy", question: "What does CIA triad stand for?", options: ["Control, Integrity, Access", "Confidentiality, Integrity, Availability", "Cyber, Information, Access", "Confidentiality, Internet, Authentication"], correctIndex: 1 },
    { id: "cyb-e2", category: "Cyber Security", topic: "Security", difficulty: "easy", question: "Which is a strong password?", options: ["123456", "password123", "Qw!9$Lm#2@x", "admin"], correctIndex: 2 },
    { id: "cyb-e3", category: "Cyber Security", topic: "Security", difficulty: "easy", question: "What is phishing?", options: ["Brute force attack", "Social engineering attack via fake messages", "Malware injection", "Password hashing"], correctIndex: 1 },
    { id: "cyb-e4", category: "Cyber Security", topic: "Security", difficulty: "easy", question: "Which protocol is secure?", options: ["HTTP", "FTP", "HTTPS", "Telnet"], correctIndex: 2 },
    { id: "cyb-e5", category: "Cyber Security", topic: "Security", difficulty: "easy", question: "What does a firewall do?", options: ["Encrypt files", "Monitor & filter network traffic", "Store passwords", "Speed up internet"], correctIndex: 1 },
    { id: "cyb-e6", category: "Cyber Security", topic: "Security", difficulty: "easy", question: "Which is an example of malware?", options: ["Antivirus", "Firewall", "Trojan", "Router"], correctIndex: 2 },
    { id: "cyb-e7", category: "Cyber Security", topic: "Security", difficulty: "easy", question: "What is two-factor authentication?", options: ["Two passwords", "Password + OTP", "Two usernames", "Two firewalls"], correctIndex: 1 },
    { id: "cyb-e8", category: "Cyber Security", topic: "Security", difficulty: "easy", question: "What does VPN stand for?", options: ["Virtual Private Network", "Verified Public Network", "Virtual Protected Node", "Variable Private Node"], correctIndex: 0 },
    { id: "cyb-e9", category: "Cyber Security", topic: "Security", difficulty: "easy", question: "Which is NOT a type of attack?", options: ["SQL Injection", "XSS", "CSS", "Brute Force"], correctIndex: 2 },
    { id: "cyb-e10", category: "Cyber Security", topic: "Security", difficulty: "easy", question: "What is encryption used for?", options: ["Speed", "Security", "Storage", "Caching"], correctIndex: 1 },
    { id: "cyb-e11", category: "Cyber Security", topic: "Security", difficulty: "easy", question: "Which hash is more secure?", options: ["MD5", "SHA-1", "SHA-256", "CRC32"], correctIndex: 2 },
    { id: "cyb-e12", category: "Cyber Security", topic: "Security", difficulty: "easy", question: "What is ransomware?", options: ["Adware", "Virus that encrypts data for money", "Firewall", "Anti-virus"], correctIndex: 1 },
    { id: "cyb-e13", category: "Cyber Security", topic: "Security", difficulty: "easy", question: "Which port is HTTPS?", options: ["80", "21", "443", "22"], correctIndex: 2 },
    { id: "cyb-e14", category: "Cyber Security", topic: "Security", difficulty: "easy", question: "What is brute force?", options: ["Guessing passwords repeatedly", "Email spam", "Encrypting data", "Routing packets"], correctIndex: 0 },
    { id: "cyb-e15", category: "Cyber Security", topic: "Security", difficulty: "easy", question: "What is social engineering?", options: ["Network routing", "Human manipulation for data", "Password encryption", "Coding error"], correctIndex: 1 },
    { id: "cyb-i1", category: "Cyber Security", topic: "Security", difficulty: "intermediate", question: "SQL Injection primarily targets:", options: ["Frontend", "Database", "Router", "DNS"], correctIndex: 1 },
    { id: "cyb-i2", category: "Cyber Security", topic: "Security", difficulty: "intermediate", question: "Which HTTP header prevents XSS?", options: ["Content-Type", "X-Frame-Options", "Content-Security-Policy", "Cache-Control"], correctIndex: 2 },
    { id: "cyb-i3", category: "Cyber Security", topic: "Security", difficulty: "intermediate", question: "What is a zero-day vulnerability?", options: ["Known vulnerability", "Patched bug", "Exploit before patch release", "Expired certificate"], correctIndex: 2 },
    { id: "cyb-i4", category: "Cyber Security", topic: "Security", difficulty: "intermediate", question: "Which tool is used for penetration testing?", options: ["Git", "Nmap", "Chrome", "VS Code"], correctIndex: 1 },
    { id: "cyb-i5", category: "Cyber Security", topic: "Security", difficulty: "intermediate", question: "What does hashing provide?", options: ["Encryption", "Integrity", "Availability", "Routing"], correctIndex: 1 },
    { id: "cyb-i6", category: "Cyber Security", topic: "Security", difficulty: "intermediate", question: "Which attack uses malicious scripts injected into web pages?", options: ["CSRF", "XSS", "DDoS", "MITM"], correctIndex: 1 },
    { id: "cyb-i7", category: "Cyber Security", topic: "Security", difficulty: "intermediate", question: "What is CSRF?", options: ["Session hijacking", "Cross-site request forgery", "SQL injection", "Encryption attack"], correctIndex: 1 },
    { id: "cyb-i8", category: "Cyber Security", topic: "Security", difficulty: "intermediate", question: "What is the purpose of salting passwords?", options: ["Speed hashing", "Prevent rainbow table attacks", "Reduce size", "Encrypt database"], correctIndex: 1 },
    { id: "cyb-i9", category: "Cyber Security", topic: "Security", difficulty: "intermediate", question: "DDoS stands for:", options: ["Distributed Denial of Service", "Direct Data over Server", "Data Deployment Service", "Digital Data System"], correctIndex: 0 },
    { id: "cyb-i10", category: "Cyber Security", topic: "Security", difficulty: "intermediate", question: "What is a digital certificate used for?", options: ["Speed", "Authentication", "Backup", "Compression"], correctIndex: 1 },
    { id: "cyb-i11", category: "Cyber Security", topic: "Security", difficulty: "intermediate", question: "What is wrong in SELECT * FROM users WHERE username = '$user';?", options: ["Syntax error", "SQL Injection vulnerability", "Wrong table", "Missing semicolon"], correctIndex: 1 },
    { id: "cyb-i12", category: "Cyber Security", topic: "Security", difficulty: "intermediate", question: "Which line prevents XSS in Node.js?", options: ["res.send(userInput)", "res.json(userInput)", "escape(userInput)", "console.log(userInput)"], correctIndex: 2 },
    { id: "cyb-i13", category: "Cyber Security", topic: "Security", difficulty: "intermediate", question: "Which protocol is used for secure remote login?", options: ["FTP", "Telnet", "SSH", "SMTP"], correctIndex: 2 },
    { id: "cyb-i14", category: "Cyber Security", topic: "Security", difficulty: "intermediate", question: "What is MITM?", options: ["Malware attack", "Man-in-the-middle attack", "Memory overflow", "Message interruption"], correctIndex: 1 },
    { id: "cyb-i15", category: "Cyber Security", topic: "Security", difficulty: "intermediate", question: "What does IDS stand for?", options: ["Intrusion Detection System", "Internet Data Server", "Internal Data Storage", "Input Detection Server"], correctIndex: 0 },
    { id: "cyb-h1", category: "Cyber Security", topic: "Security", difficulty: "hard", question: "Which cryptographic attack targets collision weaknesses?", options: ["Replay", "Birthday attack", "Phishing", "DDoS"], correctIndex: 1 },
    { id: "cyb-h2", category: "Cyber Security", topic: "Security", difficulty: "hard", question: "What is privilege escalation?", options: ["Login failure", "Gaining higher access rights", "Hashing data", "DNS attack"], correctIndex: 1 },
    { id: "cyb-h3", category: "Cyber Security", topic: "Security", difficulty: "hard", question: "What is the purpose of HSTS?", options: ["Encrypt files", "Force HTTPS communication", "Detect malware", "Hide IP"], correctIndex: 1 },
    { id: "cyb-h4", category: "Cyber Security", topic: "Security", difficulty: "hard", question: "Identify vulnerability: res.send(\"Welcome \" + req.query.name)", options: ["CSRF", "SQL Injection", "Reflected XSS", "Buffer overflow"], correctIndex: 2 },
    { id: "cyb-h5", category: "Cyber Security", topic: "Security", difficulty: "hard", question: "Which technique mitigates brute force?", options: ["CAPTCHA", "FTP", "DNS", "CDN"], correctIndex: 0 },
    { id: "cyb-h6", category: "Cyber Security", topic: "Security", difficulty: "hard", question: "What is asymmetric encryption?", options: ["Same key", "Public-private key pair", "Hashing", "Salting"], correctIndex: 1 },
    { id: "cyb-h7", category: "Cyber Security", topic: "Security", difficulty: "hard", question: "What does OWASP focus on?", options: ["Hardware", "Web application security", "Networking", "AI"], correctIndex: 1 },
    { id: "cyb-h8", category: "Cyber Security", topic: "Security", difficulty: "hard", question: "Which is a secure password storage method?", options: ["Plain text", "Base64 encoding", "bcrypt hashing", "AES encryption without salt"], correctIndex: 2 },
    { id: "cyb-h9", category: "Cyber Security", topic: "Security", difficulty: "hard", question: "What is missing for secure password storage? const hashed = hash(password);", options: ["Logging", "Salting", "Routing", "Encoding"], correctIndex: 1 },
    { id: "cyb-h10", category: "Cyber Security", topic: "Security", difficulty: "hard", question: "What is a sandbox in security?", options: ["Storage system", "Isolated testing environment", "Encryption algorithm", "Router"], correctIndex: 1 },
    { id: "cyb-h11", category: "Cyber Security", topic: "Security", difficulty: "hard", question: "What attack abuses DNS cache?", options: ["DNS spoofing", "SQL injection", "XSS", "MITM"], correctIndex: 0 },
    { id: "cyb-h12", category: "Cyber Security", topic: "Security", difficulty: "hard", question: "What is forward secrecy?", options: ["Password encryption", "Protects past sessions if key compromised", "Firewall filtering", "Database protection"], correctIndex: 1 },
    { id: "cyb-h13", category: "Cyber Security", topic: "Security", difficulty: "hard", question: "Which line mitigates CSRF in Express?", options: ["app.use(express.json())", "app.use(csrf())", "app.use(cors())", "app.use(logger())"], correctIndex: 1 },
    { id: "cyb-h14", category: "Cyber Security", topic: "Security", difficulty: "hard", question: "Which attack exploits race conditions?", options: ["TOCTOU", "DDoS", "XSS", "Phishing"], correctIndex: 0 },
    { id: "cyb-h15", category: "Cyber Security", topic: "Security", difficulty: "hard", question: "What is a honeypot?", options: ["Firewall", "Fake vulnerable system to attract attackers", "Encryption system", "Router"], correctIndex: 1 },
  ],
  "Data Analyst": [
    { id: "da-e1", category: "Data Analyst", topic: "Analytics", difficulty: "easy", question: "What is data analysis?", options: ["Writing code only", "Extracting insights from data", "Designing UI", "Hosting servers"], correctIndex: 1 },
    { id: "da-e2", category: "Data Analyst", topic: "Analytics", difficulty: "easy", question: "Which tool is commonly used for data analysis?", options: ["Photoshop", "Excel", "Figma", "Unity"], correctIndex: 1 },
    { id: "da-e3", category: "Data Analyst", topic: "Analytics", difficulty: "easy", question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Logic", "Server Question Language", "Sequential Query Library"], correctIndex: 0 },
    { id: "da-e4", category: "Data Analyst", topic: "Analytics", difficulty: "easy", question: "Which SQL command retrieves data?", options: ["INSERT", "UPDATE", "SELECT", "DELETE"], correctIndex: 2 },
    { id: "da-e5", category: "Data Analyst", topic: "Analytics", difficulty: "easy", question: "What is a dataset?", options: ["UI template", "Collection of related data", "Server", "API"], correctIndex: 1 },
    { id: "da-e6", category: "Data Analyst", topic: "Analytics", difficulty: "easy", question: "What is a column in a table?", options: ["Row identifier", "Attribute/field", "Database", "Index"], correctIndex: 1 },
    { id: "da-e7", category: "Data Analyst", topic: "Analytics", difficulty: "easy", question: "What is a row?", options: ["Feature name", "Single record", "Database", "Formula"], correctIndex: 1 },
    { id: "da-e8", category: "Data Analyst", topic: "Analytics", difficulty: "easy", question: "What is a primary key?", options: ["Duplicate value", "Unique identifier for a record", "Styling", "Index only"], correctIndex: 1 },
    { id: "da-e9", category: "Data Analyst", topic: "Analytics", difficulty: "easy", question: "What is data cleaning?", options: ["Deleting all data", "Fixing missing/inconsistent values", "Designing dashboard", "Building API"], correctIndex: 1 },
    { id: "da-e10", category: "Data Analyst", topic: "Analytics", difficulty: "easy", question: "What is mean?", options: ["Middle value", "Average", "Most frequent value", "Range"], correctIndex: 1 },
    { id: "da-e11", category: "Data Analyst", topic: "Analytics", difficulty: "easy", question: "What is median?", options: ["Average", "Middle value", "Highest value", "Sum"], correctIndex: 1 },
    { id: "da-e12", category: "Data Analyst", topic: "Analytics", difficulty: "easy", question: "What is mode?", options: ["Middle", "Most frequent value", "Average", "Sum"], correctIndex: 1 },
    { id: "da-e13", category: "Data Analyst", topic: "Analytics", difficulty: "easy", question: "Which chart is best for categorical comparison?", options: ["Line chart", "Bar chart", "Scatter plot", "Histogram"], correctIndex: 1 },
    { id: "da-e14", category: "Data Analyst", topic: "Analytics", difficulty: "easy", question: "What is null value?", options: ["Zero", "Missing value", "False", "Blank string only"], correctIndex: 1 },
    { id: "da-e15", category: "Data Analyst", topic: "Analytics", difficulty: "easy", question: "What is missing? SELECT * FROM users _____ age > 18;", options: ["WHEN", "WHERE", "FILTER", "HAVING"], correctIndex: 1 },
    { id: "da-i1", category: "Data Analyst", topic: "Analytics", difficulty: "intermediate", question: "What does GROUP BY do?", options: ["Sort data", "Aggregate data by category", "Delete duplicates", "Filter rows"], correctIndex: 1 },
    { id: "da-i2", category: "Data Analyst", topic: "Analytics", difficulty: "intermediate", question: "What does COUNT() do?", options: ["Sum values", "Count rows", "Find average", "Find max"], correctIndex: 1 },
    { id: "da-i3", category: "Data Analyst", topic: "Analytics", difficulty: "intermediate", question: "What is INNER JOIN?", options: ["Combines matching rows from tables", "Deletes rows", "Sorts data", "Filters values"], correctIndex: 0 },
    { id: "da-i4", category: "Data Analyst", topic: "Analytics", difficulty: "intermediate", question: "What is LEFT JOIN?", options: ["Only matching rows", "All left table rows + matches", "All right table rows", "Delete unmatched rows"], correctIndex: 1 },
    { id: "da-i5", category: "Data Analyst", topic: "Analytics", difficulty: "intermediate", question: "What is data normalization (analytics context)?", options: ["Delete duplicates", "Scale data to comparable range", "Remove rows", "Encrypt data"], correctIndex: 1 },
    { id: "da-i6", category: "Data Analyst", topic: "Analytics", difficulty: "intermediate", question: "What is standard deviation?", options: ["Mean", "Spread of data", "Median", "Count"], correctIndex: 1 },
    { id: "da-i7", category: "Data Analyst", topic: "Analytics", difficulty: "intermediate", question: "What is wrong? SELECT name, COUNT(*) FROM users;", options: ["Nothing", "Missing GROUP BY", "COUNT invalid", "FROM invalid"], correctIndex: 1 },
    { id: "da-i8", category: "Data Analyst", topic: "Analytics", difficulty: "intermediate", question: "What is correlation?", options: ["Causation", "Relationship between variables", "Sorting", "Filtering"], correctIndex: 1 },
    { id: "da-i9", category: "Data Analyst", topic: "Analytics", difficulty: "intermediate", question: "What does HAVING clause do?", options: ["Filter before grouping", "Filter after grouping", "Sort", "Join"], correctIndex: 1 },
    { id: "da-i10", category: "Data Analyst", topic: "Analytics", difficulty: "intermediate", question: "What is a pivot table used for?", options: ["Delete data", "Summarize large datasets", "Encrypt", "API"], correctIndex: 1 },
    { id: "da-i11", category: "Data Analyst", topic: "Analytics", difficulty: "intermediate", question: "What is outlier?", options: ["Common value", "Data point far from others", "Mean", "Null"], correctIndex: 1 },
    { id: "da-i12", category: "Data Analyst", topic: "Analytics", difficulty: "intermediate", question: "What is data visualization used for?", options: ["Storage", "Communicating insights", "Deployment", "Encryption"], correctIndex: 1 },
    { id: "da-i13", category: "Data Analyst", topic: "Analytics", difficulty: "intermediate", question: "What will SELECT AVG(salary) FROM employees return?", options: ["Highest salary", "Average salary", "Count", "Error"], correctIndex: 1 },
    { id: "da-i14", category: "Data Analyst", topic: "Analytics", difficulty: "intermediate", question: "What is sampling?", options: ["Delete data", "Selecting subset of data", "Sorting", "Joining"], correctIndex: 1 },
    { id: "da-i15", category: "Data Analyst", topic: "Analytics", difficulty: "intermediate", question: "What is dashboard used for?", options: ["Storing data", "Visual summary of metrics", "Coding", "Logging"], correctIndex: 1 },
    { id: "da-h1", category: "Data Analyst", topic: "Analytics", difficulty: "hard", question: "What is multicollinearity?", options: ["Many rows", "High correlation between independent variables", "High accuracy", "Missing values"], correctIndex: 1 },
    { id: "da-h2", category: "Data Analyst", topic: "Analytics", difficulty: "hard", question: "What is Simpson's Paradox?", options: ["Sorting error", "Trend reverses when grouped differently", "Null value", "SQL error"], correctIndex: 1 },
    { id: "da-h3", category: "Data Analyst", topic: "Analytics", difficulty: "hard", question: "What is wrong? SELECT department, COUNT(*) FROM employees WHERE COUNT(*) > 5 GROUP BY department;", options: ["Nothing", "COUNT cannot be in WHERE", "GROUP BY invalid", "department invalid"], correctIndex: 1 },
    { id: "da-h4", category: "Data Analyst", topic: "Analytics", difficulty: "hard", question: "What is A/B testing?", options: ["Data cleaning", "Comparing two variants statistically", "Visualization", "Sorting"], correctIndex: 1 },
    { id: "da-h5", category: "Data Analyst", topic: "Analytics", difficulty: "hard", question: "What is p-value?", options: ["Probability of data given null hypothesis", "Mean", "Correlation", "Variance"], correctIndex: 0 },
    { id: "da-h6", category: "Data Analyst", topic: "Analytics", difficulty: "hard", question: "What is confidence interval?", options: ["Mean", "Range of likely population parameter", "Null value", "SQL clause"], correctIndex: 1 },
    { id: "da-h7", category: "Data Analyst", topic: "Analytics", difficulty: "hard", question: "What is data skewness?", options: ["Data type", "Asymmetry of distribution", "Join type", "Sorting"], correctIndex: 1 },
    { id: "da-h8", category: "Data Analyst", topic: "Analytics", difficulty: "hard", question: "In pandas, df['A'].mean() with [1,2,None] in A:", options: ["1", "1.5", "2", "Error"], correctIndex: 1 },
    { id: "da-h9", category: "Data Analyst", topic: "Analytics", difficulty: "hard", question: "What is window function in SQL?", options: ["UI feature", "Perform calculation across related rows", "Delete row", "Join"], correctIndex: 1 },
    { id: "da-h10", category: "Data Analyst", topic: "Analytics", difficulty: "hard", question: "What is ETL?", options: ["Extract, Transform, Load", "Encrypt, Transfer, Log", "Execute, Track, Learn", "External Tool Layer"], correctIndex: 0 },
    { id: "da-h11", category: "Data Analyst", topic: "Analytics", difficulty: "hard", question: "What is data warehousing?", options: ["App hosting", "Central storage for analytics", "API", "Logging"], correctIndex: 1 },
    { id: "da-h12", category: "Data Analyst", topic: "Analytics", difficulty: "hard", question: "What is time series analysis?", options: ["Static data", "Data analyzed over time", "Grouping", "Sorting"], correctIndex: 1 },
    { id: "da-h13", category: "Data Analyst", topic: "Analytics", difficulty: "hard", question: "Better practice?", options: ["SELECT * FROM sales", "SELECT id, amount FROM sales", "DELETE FROM sales", "UPDATE sales"], correctIndex: 1 },
    { id: "da-h14", category: "Data Analyst", topic: "Analytics", difficulty: "hard", question: "What is data governance?", options: ["Chart styling", "Managing data quality & compliance", "Sorting", "Coding"], correctIndex: 1 },
    { id: "da-h15", category: "Data Analyst", topic: "Analytics", difficulty: "hard", question: "What is root cause analysis?", options: ["Sorting data", "Identifying underlying cause of issue", "Deleting outliers", "Joining tables"], correctIndex: 1 },
  ],
  "Game Development": [
    { id: "gd-e1", category: "Game Development", topic: "Game Dev", difficulty: "easy", question: "Which engine is widely used for 2D & 3D games?", options: ["Photoshop", "Unity", "MySQL", "Node.js"], correctIndex: 1 },
    { id: "gd-e2", category: "Game Development", topic: "Game Dev", difficulty: "easy", question: "What does FPS stand for in games?", options: ["Fast Play System", "Frames Per Second", "File Processing Speed", "Frame Pixel Size"], correctIndex: 1 },
    { id: "gd-e3", category: "Game Development", topic: "Game Dev", difficulty: "easy", question: "Which language is primarily used in Unity?", options: ["Python", "C#", "Java", "C++"], correctIndex: 1 },
    { id: "gd-e4", category: "Game Development", topic: "Game Dev", difficulty: "easy", question: "Unreal Engine primarily uses:", options: ["Java", "C#", "C++", "PHP"], correctIndex: 2 },
    { id: "gd-e5", category: "Game Development", topic: "Game Dev", difficulty: "easy", question: "What is a game loop?", options: ["Rendering engine", "Continuous update-render cycle", "Physics system", "AI model"], correctIndex: 1 },
    { id: "gd-e6", category: "Game Development", topic: "Game Dev", difficulty: "easy", question: "What does collision detection do?", options: ["Adds sound", "Detects when objects interact", "Renders UI", "Saves game"], correctIndex: 1 },
    { id: "gd-e7", category: "Game Development", topic: "Game Dev", difficulty: "easy", question: "What is a sprite?", options: ["3D model", "2D image in game", "Shader", "Audio file"], correctIndex: 1 },
    { id: "gd-e8", category: "Game Development", topic: "Game Dev", difficulty: "easy", question: "What is hitbox?", options: ["UI element", "Area where collision is detected", "Sound effect", "Frame rate"], correctIndex: 1 },
    { id: "gd-e9", category: "Game Development", topic: "Game Dev", difficulty: "easy", question: "What is NPC?", options: ["Non-Playable Character", "Network Player Control", "Non-Pixel Character", "New Player Code"], correctIndex: 0 },
    { id: "gd-e10", category: "Game Development", topic: "Game Dev", difficulty: "easy", question: "What is latency in multiplayer games?", options: ["Frame drop", "Network delay", "AI delay", "Rendering bug"], correctIndex: 1 },
    { id: "gd-e11", category: "Game Development", topic: "Game Dev", difficulty: "easy", question: "What is physics engine responsible for?", options: ["Lighting", "Movement simulation", "Networking", "UI"], correctIndex: 1 },
    { id: "gd-e12", category: "Game Development", topic: "Game Dev", difficulty: "easy", question: "Which is used for game animations?", options: ["Keyframes", "SQL", "REST API", "Docker"], correctIndex: 0 },
    { id: "gd-e13", category: "Game Development", topic: "Game Dev", difficulty: "easy", question: "What is deltaTime used for?", options: ["Rendering", "Frame-independent movement", "Audio sync", "Physics reset"], correctIndex: 1 },
    { id: "gd-e14", category: "Game Development", topic: "Game Dev", difficulty: "easy", question: "What is a prefab in Unity?", options: ["Database", "Reusable game object template", "Animation file", "Scene file"], correctIndex: 1 },
    { id: "gd-e15", category: "Game Development", topic: "Game Dev", difficulty: "easy", question: "What is a shader?", options: ["Sound processor", "GPU program for rendering visuals", "Physics engine", "AI model"], correctIndex: 1 },
    { id: "gd-i1", category: "Game Development", topic: "Game Dev", difficulty: "intermediate", question: "Which pattern is common in game object communication?", options: ["Singleton", "Observer", "Factory", "All of the above"], correctIndex: 3 },
    { id: "gd-i2", category: "Game Development", topic: "Game Dev", difficulty: "intermediate", question: "What is object pooling used for?", options: ["Multiplayer sync", "Reducing memory allocation overhead", "Audio compression", "UI rendering"], correctIndex: 1 },
    { id: "gd-i3", category: "Game Development", topic: "Game Dev", difficulty: "intermediate", question: "What causes frame drops?", options: ["Too many draw calls", "Optimized shaders", "Object pooling", "Caching"], correctIndex: 0 },
    { id: "gd-i4", category: "Game Development", topic: "Game Dev", difficulty: "intermediate", question: "What is raycasting used for?", options: ["Lighting", "Detecting objects in a direction", "Saving game", "Physics reset"], correctIndex: 1 },
    { id: "gd-i5", category: "Game Development", topic: "Game Dev", difficulty: "intermediate", question: "What is LOD (Level of Detail)?", options: ["AI system", "Rendering optimization technique", "Physics engine", "Networking tool"], correctIndex: 1 },
    { id: "gd-i6", category: "Game Development", topic: "Game Dev", difficulty: "intermediate", question: "What is NavMesh used for?", options: ["Audio", "AI pathfinding", "Shader design", "UI"], correctIndex: 1 },
    { id: "gd-i7", category: "Game Development", topic: "Game Dev", difficulty: "intermediate", question: "What is wrong? transform.position += new Vector3(1,0,0); in Update()", options: ["Syntax error", "Frame-dependent movement issue", "Memory leak", "Collision bug"], correctIndex: 1 },
    { id: "gd-i8", category: "Game Development", topic: "Game Dev", difficulty: "intermediate", question: "What is culling?", options: ["Removing off-screen objects from rendering", "Destroying player", "Resetting level", "Compressing textures"], correctIndex: 0 },
    { id: "gd-i9", category: "Game Development", topic: "Game Dev", difficulty: "intermediate", question: "What is ECS architecture?", options: ["Rendering tool", "Entity Component System", "Event Control Script", "Engine Core System"], correctIndex: 1 },
    { id: "gd-i10", category: "Game Development", topic: "Game Dev", difficulty: "intermediate", question: "What is interpolation used for in multiplayer?", options: ["Speed", "Smooth movement between updates", "AI improvement", "Memory optimization"], correctIndex: 1 },
    { id: "gd-i11", category: "Game Development", topic: "Game Dev", difficulty: "intermediate", question: "rb.AddForce in Update() — what is the issue?", options: ["Syntax error", "Should be in FixedUpdate()", "Missing collider", "Missing Start()"], correctIndex: 1 },
    { id: "gd-i12", category: "Game Development", topic: "Game Dev", difficulty: "intermediate", question: "What causes memory leaks in games?", options: ["Destroyed objects", "Unreleased references", "Using deltaTime", "NavMesh"], correctIndex: 1 },
    { id: "gd-i13", category: "Game Development", topic: "Game Dev", difficulty: "intermediate", question: "What is state machine used for?", options: ["UI", "AI behavior control", "Rendering", "Shaders"], correctIndex: 1 },
    { id: "gd-i14", category: "Game Development", topic: "Game Dev", difficulty: "intermediate", question: "What is draw call?", options: ["Physics trigger", "GPU render request", "AI decision", "Collision event"], correctIndex: 1 },
    { id: "gd-i15", category: "Game Development", topic: "Game Dev", difficulty: "intermediate", question: "What is procedural generation?", options: ["Manual design", "Algorithm-generated content", "Fixed level design", "Shader trick"], correctIndex: 1 },
    { id: "gd-h1", category: "Game Development", topic: "Game Dev", difficulty: "hard", question: "What is the main benefit of ECS over OOP?", options: ["Better visuals", "Better cache efficiency", "Faster UI", "Simpler syntax"], correctIndex: 1 },
    { id: "gd-h2", category: "Game Development", topic: "Game Dev", difficulty: "hard", question: "What causes network desync?", options: ["High FPS", "Non-deterministic simulation", "Low latency", "Static meshes"], correctIndex: 1 },
    { id: "gd-h3", category: "Game Development", topic: "Game Dev", difficulty: "hard", question: "What is rollback netcode used for?", options: ["Audio", "Multiplayer synchronization", "Physics reset", "Rendering"], correctIndex: 1 },
    { id: "gd-h4", category: "Game Development", topic: "Game Dev", difficulty: "hard", question: "Jump applies physics force. GetKey(KeyCode.Space) in Update() — issue?", options: ["No issue", "Should use GetKeyDown", "Should use FixedUpdate", "Both B and C"], correctIndex: 3 },
    { id: "gd-h5", category: "Game Development", topic: "Game Dev", difficulty: "hard", question: "What is frustum culling?", options: ["Removing objects outside camera view", "AI logic", "Physics control", "Shader control"], correctIndex: 0 },
    { id: "gd-h6", category: "Game Development", topic: "Game Dev", difficulty: "hard", question: "What is batching?", options: ["Grouping draw calls", "AI update", "Physics sync", "Multiplayer logic"], correctIndex: 0 },
    { id: "gd-h7", category: "Game Development", topic: "Game Dev", difficulty: "hard", question: "What is deterministic physics important for?", options: ["Graphics", "Multiplayer sync", "UI", "Audio"], correctIndex: 1 },
    { id: "gd-h8", category: "Game Development", topic: "Game Dev", difficulty: "hard", question: "What's wrong? enemies.Add(Instantiate(enemyPrefab)) every Update()?", options: ["Syntax error", "Massive memory leak", "Collider issue", "Missing prefab"], correctIndex: 1 },
    { id: "gd-h9", category: "Game Development", topic: "Game Dev", difficulty: "hard", question: "What does occlusion culling optimize?", options: ["Hidden objects blocked by others", "Network delay", "AI", "Physics"], correctIndex: 0 },
    { id: "gd-h10", category: "Game Development", topic: "Game Dev", difficulty: "hard", question: "What is shader pipeline?", options: ["Physics flow", "GPU rendering stages", "AI flow", "Network stack"], correctIndex: 1 },
    { id: "gd-h11", category: "Game Development", topic: "Game Dev", difficulty: "hard", question: "What is fixed timestep used for?", options: ["UI", "Physics consistency", "Audio sync", "FPS control"], correctIndex: 1 },
    { id: "gd-h12", category: "Game Development", topic: "Game Dev", difficulty: "hard", question: "What causes garbage collection spikes?", options: ["Object pooling", "Frequent allocations", "Culling", "Shaders"], correctIndex: 1 },
    { id: "gd-h13", category: "Game Development", topic: "Game Dev", difficulty: "hard", question: "Which improves performance?", options: ["Instantiate objects every frame", "Use object pooling", "Disable culling", "Increase physics steps"], correctIndex: 1 },
    { id: "gd-h14", category: "Game Development", topic: "Game Dev", difficulty: "hard", question: "What is overdraw?", options: ["Too many layers rendered on same pixel", "AI lag", "Network lag", "Physics bug"], correctIndex: 0 },
    { id: "gd-h15", category: "Game Development", topic: "Game Dev", difficulty: "hard", question: "What is data-oriented design?", options: ["OOP based", "CPU cache optimized architecture", "UI pattern", "Shader design"], correctIndex: 1 },
  ],
  "Machine Learning": [
    { id: "ml-e1", category: "Machine Learning", topic: "ML", difficulty: "easy", question: "What is Machine Learning?", options: ["Hardcoding rules", "Systems learning from data", "Manual programming", "Database storage"], correctIndex: 1 },
    { id: "ml-e2", category: "Machine Learning", topic: "ML", difficulty: "easy", question: "Which is a type of ML?", options: ["Supervised Learning", "Structured Programming", "Manual Learning", "Cloud Learning"], correctIndex: 0 },
    { id: "ml-e3", category: "Machine Learning", topic: "ML", difficulty: "easy", question: "What is labeled data?", options: ["Data with output tags", "Encrypted data", "Database schema", "Raw logs"], correctIndex: 0 },
    { id: "ml-e4", category: "Machine Learning", topic: "ML", difficulty: "easy", question: "Which is a supervised algorithm?", options: ["K-Means", "Linear Regression", "PCA", "DBSCAN"], correctIndex: 1 },
    { id: "ml-e5", category: "Machine Learning", topic: "ML", difficulty: "easy", question: "What is overfitting?", options: ["Model performs well on test data", "Model memorizes training data", "Model too simple", "Dataset too small"], correctIndex: 1 },
    { id: "ml-e6", category: "Machine Learning", topic: "ML", difficulty: "easy", question: "What is underfitting?", options: ["Model too complex", "Model too simple", "Too much data", "Too many features"], correctIndex: 1 },
    { id: "ml-e7", category: "Machine Learning", topic: "ML", difficulty: "easy", question: "What is training data used for?", options: ["Evaluation only", "Learning patterns", "Deployment", "Visualization"], correctIndex: 1 },
    { id: "ml-e8", category: "Machine Learning", topic: "ML", difficulty: "easy", question: "What is test data used for?", options: ["Model learning", "Final evaluation", "Cleaning", "Logging"], correctIndex: 1 },
    { id: "ml-e9", category: "Machine Learning", topic: "ML", difficulty: "easy", question: "What is a feature?", options: ["Output label", "Input variable", "Algorithm", "Model"], correctIndex: 1 },
    { id: "ml-e10", category: "Machine Learning", topic: "ML", difficulty: "easy", question: "What is classification?", options: ["Predict continuous value", "Predict category", "Cluster data", "Normalize data"], correctIndex: 1 },
    { id: "ml-e11", category: "Machine Learning", topic: "ML", difficulty: "easy", question: "What is regression?", options: ["Predict category", "Predict numeric value", "Clustering", "Sampling"], correctIndex: 1 },
    { id: "ml-e12", category: "Machine Learning", topic: "ML", difficulty: "easy", question: "Which library is used for ML in Python?", options: ["NumPy", "scikit-learn", "React", "Express"], correctIndex: 1 },
    { id: "ml-e13", category: "Machine Learning", topic: "ML", difficulty: "easy", question: "What is accuracy?", options: ["Correct predictions / total predictions", "Model speed", "Dataset size", "Feature count"], correctIndex: 0 },
    { id: "ml-e14", category: "Machine Learning", topic: "ML", difficulty: "easy", question: "What is dataset split ratio commonly used?", options: ["50-50", "80-20", "90-10 always", "30-70"], correctIndex: 1 },
    { id: "ml-e15", category: "Machine Learning", topic: "ML", difficulty: "easy", question: "What is missing? model._____(X, y)", options: ["train", "fit", "learn", "build"], correctIndex: 1 },
    { id: "ml-i1", category: "Machine Learning", topic: "ML", difficulty: "intermediate", question: "What is bias in ML?", options: ["Data size", "Error from wrong assumptions", "Overfitting", "Speed"], correctIndex: 1 },
    { id: "ml-i2", category: "Machine Learning", topic: "ML", difficulty: "intermediate", question: "What is variance?", options: ["Error from sensitivity to data", "Dataset mean", "Feature scaling", "Deployment metric"], correctIndex: 0 },
    { id: "ml-i3", category: "Machine Learning", topic: "ML", difficulty: "intermediate", question: "What is cross-validation?", options: ["Data cleaning", "Repeated data splitting for evaluation", "Model deployment", "Feature removal"], correctIndex: 1 },
    { id: "ml-i4", category: "Machine Learning", topic: "ML", difficulty: "intermediate", question: "What is confusion matrix used for?", options: ["Regression", "Classification evaluation", "Clustering", "Data cleaning"], correctIndex: 1 },
    { id: "ml-i5", category: "Machine Learning", topic: "ML", difficulty: "intermediate", question: "What is precision?", options: ["TP / (TP + FP)", "TP / (TP + FN)", "(TP + TN)/Total", "FP / Total"], correctIndex: 0 },
    { id: "ml-i6", category: "Machine Learning", topic: "ML", difficulty: "intermediate", question: "What is recall?", options: ["TP / (TP + FP)", "TP / (TP + FN)", "TN / Total", "Accuracy"], correctIndex: 1 },
    { id: "ml-i7", category: "Machine Learning", topic: "ML", difficulty: "intermediate", question: "What will np.array([1,2,3]).mean() output?", options: ["1", "2", "3", "Error"], correctIndex: 1 },
    { id: "ml-i8", category: "Machine Learning", topic: "ML", difficulty: "intermediate", question: "What is normalization used for?", options: ["Remove features", "Scale features", "Increase bias", "Deploy model"], correctIndex: 1 },
    { id: "ml-i9", category: "Machine Learning", topic: "ML", difficulty: "intermediate", question: "What is gradient descent?", options: ["Loss function", "Optimization algorithm", "Clustering method", "Feature scaling"], correctIndex: 1 },
    { id: "ml-i10", category: "Machine Learning", topic: "ML", difficulty: "intermediate", question: "What is learning rate?", options: ["Dataset size", "Step size in optimization", "Accuracy", "Batch size"], correctIndex: 1 },
    { id: "ml-i11", category: "Machine Learning", topic: "ML", difficulty: "intermediate", question: "What is regularization used for?", options: ["Increase variance", "Reduce overfitting", "Speed up model", "Increase bias"], correctIndex: 1 },
    { id: "ml-i12", category: "Machine Learning", topic: "ML", difficulty: "intermediate", question: "What is L2 regularization also called?", options: ["Lasso", "Ridge", "Elastic", "Dropout"], correctIndex: 1 },
    { id: "ml-i13", category: "Machine Learning", topic: "ML", difficulty: "intermediate", question: "What is wrong? model.predict(X, y)", options: ["Nothing", "predict takes only X", "Missing fit", "Wrong library"], correctIndex: 1 },
    { id: "ml-i14", category: "Machine Learning", topic: "ML", difficulty: "intermediate", question: "What is F1-score?", options: ["Mean of precision & recall", "Harmonic mean of precision & recall", "Accuracy", "Loss"], correctIndex: 1 },
    { id: "ml-i15", category: "Machine Learning", topic: "ML", difficulty: "intermediate", question: "What is clustering?", options: ["Supervised learning", "Grouping similar data without labels", "Regression", "Scaling"], correctIndex: 1 },
    { id: "ml-h1", category: "Machine Learning", topic: "ML", difficulty: "hard", question: "What is curse of dimensionality?", options: ["High bias", "Problems with high feature space", "Overfitting only", "Low variance"], correctIndex: 1 },
    { id: "ml-h2", category: "Machine Learning", topic: "ML", difficulty: "hard", question: "What is dropout in neural networks?", options: ["Remove dataset", "Randomly disable neurons during training", "Delete model", "Reduce learning rate"], correctIndex: 1 },
    { id: "ml-h3", category: "Machine Learning", topic: "ML", difficulty: "hard", question: "What is wrong? X_train, X_test = train_test_split(X, test_size=0.2)", options: ["Nothing", "Missing y split", "test_size invalid", "Wrong import"], correctIndex: 1 },
    { id: "ml-h4", category: "Machine Learning", topic: "ML", difficulty: "hard", question: "What is vanishing gradient problem?", options: ["Gradient too large", "Gradient becomes too small in deep networks", "High accuracy", "High variance"], correctIndex: 1 },
    { id: "ml-h5", category: "Machine Learning", topic: "ML", difficulty: "hard", question: "What is batch size?", options: ["Dataset size", "Samples processed per iteration", "Learning rate", "Feature count"], correctIndex: 1 },
    { id: "ml-h6", category: "Machine Learning", topic: "ML", difficulty: "hard", question: "What is ROC curve used for?", options: ["Regression", "Binary classifier evaluation", "Clustering", "Normalization"], correctIndex: 1 },
    { id: "ml-h7", category: "Machine Learning", topic: "ML", difficulty: "hard", question: "What is AUC?", options: ["Loss value", "Area under ROC curve", "Accuracy", "Bias"], correctIndex: 1 },
    { id: "ml-h8", category: "Machine Learning", topic: "ML", difficulty: "hard", question: "y = x * 2; y.sum().backward(); with requires_grad=True — x.grad?", options: ["None", "[2,2]", "[1,1]", "Error"], correctIndex: 1 },
    { id: "ml-h9", category: "Machine Learning", topic: "ML", difficulty: "hard", question: "What is ensemble learning?", options: ["Single model", "Combining multiple models", "Feature scaling", "Deployment"], correctIndex: 1 },
    { id: "ml-h10", category: "Machine Learning", topic: "ML", difficulty: "hard", question: "What is boosting?", options: ["Parallel training", "Sequentially correcting errors", "Dropout", "Scaling"], correctIndex: 1 },
    { id: "ml-h11", category: "Machine Learning", topic: "ML", difficulty: "hard", question: "What is bagging?", options: ["Sequential correction", "Parallel training with sampling", "Regularization", "Scaling"], correctIndex: 1 },
    { id: "ml-h12", category: "Machine Learning", topic: "ML", difficulty: "hard", question: "What is hyperparameter tuning?", options: ["Changing weights", "Optimizing model configuration", "Scaling data", "Splitting data"], correctIndex: 1 },
    { id: "ml-h13", category: "Machine Learning", topic: "ML", difficulty: "hard", question: "Better practice?", options: ["model.fit(X_test, y_test)", "model.fit(X_train, y_train)", "model.predict(X_train)", "model.score(X_train)"], correctIndex: 1 },
    { id: "ml-h14", category: "Machine Learning", topic: "ML", difficulty: "hard", question: "What is concept drift?", options: ["Feature removal", "Data distribution changes over time", "Learning rate issue", "Bias"], correctIndex: 1 },
    { id: "ml-h15", category: "Machine Learning", topic: "ML", difficulty: "hard", question: "What is model deployment challenge?", options: ["Writing code", "Data pipeline, scaling & monitoring", "Training only", "Dataset cleaning"], correctIndex: 1 },
  ],
  "AWS": [
    { id: "aws-e1", category: "AWS", topic: "AWS", difficulty: "easy", question: "What is AWS?", options: ["Programming language", "Cloud computing platform", "Database", "Operating system"], correctIndex: 1 },
    { id: "aws-e2", category: "AWS", topic: "AWS", difficulty: "easy", question: "What is Amazon EC2 used for?", options: ["Storage", "Virtual servers", "Database only", "DNS"], correctIndex: 1 },
    { id: "aws-e3", category: "AWS", topic: "AWS", difficulty: "easy", question: "What is Amazon S3?", options: ["Compute service", "Object storage service", "Database", "Firewall"], correctIndex: 1 },
    { id: "aws-e4", category: "AWS", topic: "AWS", difficulty: "easy", question: "What is AWS Lambda?", options: ["Virtual machine", "Serverless compute service", "Storage", "CDN"], correctIndex: 1 },
    { id: "aws-e5", category: "AWS", topic: "AWS", difficulty: "easy", question: "What is IAM used for?", options: ["Monitoring", "Access control", "Storage", "Networking"], correctIndex: 1 },
    { id: "aws-e6", category: "AWS", topic: "AWS", difficulty: "easy", question: "What is RDS?", options: ["Messaging service", "Managed relational database", "Server", "Firewall"], correctIndex: 1 },
    { id: "aws-e7", category: "AWS", topic: "AWS", difficulty: "easy", question: "What does VPC stand for?", options: ["Virtual Private Cloud", "Verified Private Cloud", "Virtual Public Cluster", "Variable Private Control"], correctIndex: 0 },
    { id: "aws-e8", category: "AWS", topic: "AWS", difficulty: "easy", question: "Which service is used for CDN?", options: ["EC2", "S3", "CloudFront", "DynamoDB"], correctIndex: 2 },
    { id: "aws-e9", category: "AWS", topic: "AWS", difficulty: "easy", question: "What is DynamoDB?", options: ["NoSQL database", "File storage", "Monitoring tool", "CDN"], correctIndex: 0 },
    { id: "aws-e10", category: "AWS", topic: "AWS", difficulty: "easy", question: "What is CloudWatch used for?", options: ["Monitoring & logging", "Storage", "Compute", "IAM"], correctIndex: 0 },
    { id: "aws-e11", category: "AWS", topic: "AWS", difficulty: "easy", question: "Which service manages DNS?", options: ["Route 53", "EC2", "Lambda", "S3"], correctIndex: 0 },
    { id: "aws-e12", category: "AWS", topic: "AWS", difficulty: "easy", question: "What is Elastic Beanstalk?", options: ["Managed deployment service", "Database", "Firewall", "Storage"], correctIndex: 0 },
    { id: "aws-e13", category: "AWS", topic: "AWS", difficulty: "easy", question: "What is the shared responsibility model?", options: ["AWS handles everything", "Customer handles everything", "AWS & customer share security responsibilities", "No security model"], correctIndex: 2 },
    { id: "aws-e14", category: "AWS", topic: "AWS", difficulty: "easy", question: "What does Auto Scaling do?", options: ["Backup data", "Automatically adjust instance count", "Encrypt data", "Monitor logs"], correctIndex: 1 },
    { id: "aws-e15", category: "AWS", topic: "AWS", difficulty: "easy", question: "What is an Availability Zone?", options: ["Country", "Data center within region", "Cloud account", "Subnet"], correctIndex: 1 },
    { id: "aws-i1", category: "AWS", topic: "AWS", difficulty: "intermediate", question: "What is an IAM role?", options: ["User account", "Temporary permission set for services", "Database", "EC2 type"], correctIndex: 1 },
    { id: "aws-i2", category: "AWS", topic: "AWS", difficulty: "intermediate", question: "What is a Security Group?", options: ["Monitoring tool", "Virtual firewall for EC2", "Database", "Load balancer"], correctIndex: 1 },
    { id: "aws-i3", category: "AWS", topic: "AWS", difficulty: "intermediate", question: "What is an Elastic Load Balancer used for?", options: ["Backup", "Distribute traffic across instances", "Encrypt data", "Logging"], correctIndex: 1 },
    { id: "aws-i4", category: "AWS", topic: "AWS", difficulty: "intermediate", question: "What is NAT Gateway used for?", options: ["Public access to private instances", "Storage", "DNS", "IAM"], correctIndex: 0 },
    { id: "aws-i5", category: "AWS", topic: "AWS", difficulty: "intermediate", question: "What is wrong in IAM policy with Action * Resource *?", options: ["Syntax error", "Over-permissive policy", "Missing braces", "Wrong service"], correctIndex: 1 },
    { id: "aws-i6", category: "AWS", topic: "AWS", difficulty: "intermediate", question: "What is EBS?", options: ["Object storage", "Block storage for EC2", "Database", "CDN"], correctIndex: 1 },
    { id: "aws-i7", category: "AWS", topic: "AWS", difficulty: "intermediate", question: "What is S3 lifecycle policy?", options: ["Auto-scaling", "Move objects between storage classes", "Monitoring", "DNS"], correctIndex: 1 },
    { id: "aws-i8", category: "AWS", topic: "AWS", difficulty: "intermediate", question: "What is CloudFormation?", options: ["Monitoring tool", "Infrastructure as Code service", "Storage", "Database"], correctIndex: 1 },
    { id: "aws-i9", category: "AWS", topic: "AWS", difficulty: "intermediate", question: "What is the difference between public and private subnet?", options: ["Cost", "Internet accessibility", "Storage", "Database type"], correctIndex: 1 },
    { id: "aws-i10", category: "AWS", topic: "AWS", difficulty: "intermediate", question: "What is an AMI?", options: ["Virtual machine template", "Database snapshot", "DNS record", "Firewall"], correctIndex: 0 },
    { id: "aws-i11", category: "AWS", topic: "AWS", difficulty: "intermediate", question: "What is missing in VPC setup for private subnet EC2 internet access?", options: ["NAT Gateway", "S3", "IAM role", "Lambda"], correctIndex: 0 },
    { id: "aws-i12", category: "AWS", topic: "AWS", difficulty: "intermediate", question: "What is multi-AZ deployment?", options: ["Single server", "High availability across zones", "Backup", "Monitoring"], correctIndex: 1 },
    { id: "aws-i13", category: "AWS", topic: "AWS", difficulty: "intermediate", question: "What is CloudTrail?", options: ["Logging API activity", "Storage", "Compute", "Firewall"], correctIndex: 0 },
    { id: "aws-i14", category: "AWS", topic: "AWS", difficulty: "intermediate", question: "What is Reserved Instance?", options: ["On-demand", "Discounted long-term instance commitment", "Free tier", "Backup instance"], correctIndex: 1 },
    { id: "aws-i15", category: "AWS", topic: "AWS", difficulty: "intermediate", question: "What is EKS?", options: ["Kubernetes service", "Storage", "Database", "CDN"], correctIndex: 0 },
    { id: "aws-h1", category: "AWS", topic: "AWS", difficulty: "hard", question: "What is the main benefit of Infrastructure as Code?", options: ["Manual setup", "Repeatable, version-controlled deployments", "More cost", "Slower provisioning"], correctIndex: 1 },
    { id: "aws-h2", category: "AWS", topic: "AWS", difficulty: "hard", question: "What causes high AWS bills unexpectedly?", options: ["Under-provisioning", "Unmonitored services running", "IAM roles", "CloudTrail"], correctIndex: 1 },
    { id: "aws-h3", category: "AWS", topic: "AWS", difficulty: "hard", question: "What is cross-region replication in S3?", options: ["Backup within same AZ", "Replicate objects to different region", "Local storage", "DNS replication"], correctIndex: 1 },
    { id: "aws-h4", category: "AWS", topic: "AWS", difficulty: "hard", question: "What does aws s3 rm s3://mybucket --recursive do?", options: ["Syntax error", "Deletes entire bucket contents", "Wrong command", "No issue"], correctIndex: 1 },
    { id: "aws-h5", category: "AWS", topic: "AWS", difficulty: "hard", question: "What is least privilege principle?", options: ["Full access to all users", "Grant minimal necessary permissions", "Public access", "Disable IAM"], correctIndex: 1 },
    { id: "aws-h6", category: "AWS", topic: "AWS", difficulty: "hard", question: "What is VPC peering?", options: ["Backup", "Connect two VPCs privately", "DNS", "IAM"], correctIndex: 1 },
    { id: "aws-h7", category: "AWS", topic: "AWS", difficulty: "hard", question: "What is spot instance?", options: ["Free instance", "Discounted instance that can be interrupted", "Dedicated server", "Private subnet"], correctIndex: 1 },
    { id: "aws-h8", category: "AWS", topic: "AWS", difficulty: "hard", question: "What is wrong with Deny s3:* Resource *?", options: ["Syntax error", "Blocks all S3 access", "Wrong service", "Missing version"], correctIndex: 1 },
    { id: "aws-h9", category: "AWS", topic: "AWS", difficulty: "hard", question: "What is AWS Shield?", options: ["Storage", "DDoS protection", "Database", "IAM"], correctIndex: 1 },
    { id: "aws-h10", category: "AWS", topic: "AWS", difficulty: "hard", question: "What is parameter store used for?", options: ["Secret/config management", "Storage", "Compute", "DNS"], correctIndex: 0 },
    { id: "aws-h11", category: "AWS", topic: "AWS", difficulty: "hard", question: "What is autoscaling cooldown?", options: ["Backup", "Wait time between scaling actions", "Logging", "DNS"], correctIndex: 1 },
    { id: "aws-h12", category: "AWS", topic: "AWS", difficulty: "hard", question: "What is blue-green deployment?", options: ["Backup", "Zero-downtime deployment strategy", "Monitoring", "Encryption"], correctIndex: 1 },
    { id: "aws-h13", category: "AWS", topic: "AWS", difficulty: "hard", question: "Which improves cost optimization?", options: ["Run EC2 24/7 unused", "Use auto-scaling + spot instances", "Disable monitoring", "Public S3 buckets"], correctIndex: 1 },
    { id: "aws-h14", category: "AWS", topic: "AWS", difficulty: "hard", question: "What is Transit Gateway?", options: ["DNS tool", "Central hub for connecting VPCs", "Database", "Storage"], correctIndex: 1 },
    { id: "aws-h15", category: "AWS", topic: "AWS", difficulty: "hard", question: "What defines high availability architecture?", options: ["Single EC2", "Multi-AZ + Load Balancer + Auto Scaling", "Single database", "Local server"], correctIndex: 1 },
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
  if (declaredSkills.includes("Frontend")) categories.push("Frontend");
  if (declaredSkills.includes("App Dev Frontend")) categories.push("App Dev");
  if (declaredSkills.includes("Backend")) categories.push("Backend");
  if (declaredSkills.includes("DevOps")) categories.push("DevOps");
  if (declaredSkills.includes("Power BI")) categories.push("Power BI");
  if (declaredSkills.includes("Blockchain")) categories.push("Blockchain");
  if (declaredSkills.includes("Cyber Security")) categories.push("Cyber Security");
  if (declaredSkills.includes("Data Analyst")) categories.push("Data Analyst");
  if (declaredSkills.includes("Game Development")) categories.push("Game Development");
  if (declaredSkills.includes("Machine Learning")) categories.push("Machine Learning");
  if (declaredSkills.includes("AWS")) categories.push("AWS");
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

/** All roadmap categories — always show every track so the roadmap has multiple items. */
const ALL_ROADMAP_CATEGORIES = [
  "Frontend", "Backend", "DevOps", "App Dev",
  "Power BI", "Blockchain", "Cyber Security", "Data Analyst",
  "Game Development", "Machine Learning", "AWS",
];

/**
 * Build topic_scores for multi-role alignment and role transition APIs.
 * verificationResults: { question_id: true|false }
 * Returns: { "Frontend": { "HTML": { correct, total }, ... }, "Backend": { ... }, ... }
 */
export function buildTopicScoresForAlignment(verificationResults) {
  const topicScores = {};
  ALL_ROADMAP_CATEGORIES.forEach((category) => {
    const questions = QUIZ_QUESTIONS[category] || [];
    const byTopic = {};
    questions.forEach((q) => {
      if (!Object.prototype.hasOwnProperty.call(verificationResults, q.id)) return;
      const topic = q.topic || "General";
      if (!byTopic[topic]) byTopic[topic] = { correct: 0, total: 0 };
      byTopic[topic].total += 1;
      if (verificationResults[q.id] === true) byTopic[topic].correct += 1;
    });
    topicScores[category] = byTopic;
  });
  return topicScores;
}

/** Roadmap diagram shows these 4 topics (aggregated across categories). */
export const ROADMAP_TOPICS = ["Database", "Security", "Architecture", "API"];

/**
 * Get results per topic (Database, Security, Architecture, API) for diagram display.
 * Aggregates all questions with matching topic across declared categories.
 */
export function getTopicBasedResults(verificationResults, declaredSkills) {
  const categories = getCategoriesFromDeclaration(declaredSkills);
  if (categories.length === 0) {
    categories.push("Frontend", "Backend", "DevOps", "App Dev");
  }

  const results = [];
  ROADMAP_TOPICS.forEach((topicName) => {
    let correct = 0;
    let total = 0;
    let categoryUsed = "Backend";
    categories.forEach((cat) => {
      const questions = (QUIZ_QUESTIONS[cat] || []).filter(
        (q) => (q.topic || "") === topicName && Object.prototype.hasOwnProperty.call(verificationResults, q.id)
      );
      questions.forEach((q) => {
        total += 1;
        if (verificationResults[q.id] === true) correct += 1;
      });
      if (questions.length > 0) categoryUsed = cat;
    });

    if (total === 0) {
      results.push({
        name: topicName,
        score: 0,
        total: 0,
        passed: false,
        reason: "Declare skills and take the quiz to see your result.",
      });
      return;
    }

    const passed = correct / total >= PASS_THRESHOLD;
    const suggestion = getTopicSuggestion(categoryUsed, topicName, correct, total);
    results.push({
      name: topicName,
      score: correct,
      total,
      passed,
      reason: suggestion,
    });
  });
  return results;
}

/**
 * Get results for declared categories only — for roadmap diagram that reflects declaration + quiz.
 * One step per declared skill; reason shows quiz result with specific topic breakdown or "Take the quiz to see your result."
 * If nothing declared, returns placeholder steps (Database, Security, Architecture, API) so diagram isn't empty.
 */
export function getDeclaredCategoryResults(verificationResults, declaredSkills) {
  const categories = getCategoriesFromDeclaration(declaredSkills);
  if (categories.length === 0) {
    return getTopicBasedResults(verificationResults, []);
  }
  const results = [];
  categories.forEach((category) => {
    const allQuestions = QUIZ_QUESTIONS[category] || [];
    const questions = allQuestions.filter((q) => Object.prototype.hasOwnProperty.call(verificationResults, q.id));
    if (questions.length === 0) {
      results.push({
        name: category,
        score: 0,
        total: 0,
        passed: false,
        reason: "Take the quiz to see your result.",
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
    const passed = correct / total >= PASS_THRESHOLD;
    const pct = Math.round((correct / total) * 100);
    
    // Build detailed reason with specific topics that need work
    const weakTopics = Object.entries(byTopic)
      .filter(([topic, { correct: c, total: t }]) => t > 0 && c / t < PASS_THRESHOLD)
      .sort((a, b) => {
        const scoreA = a[1].correct / a[1].total;
        const scoreB = b[1].correct / b[1].total;
        return scoreA - scoreB; // Sort by worst first
      })
      .slice(0, 2); // Show top 2 weak topics for brevity
    
    let reason;
    if (passed) {
      reason = `${correct}/${total} correct (${pct}%) — keep practicing.`;
    } else if (weakTopics.length > 0) {
      // Get the worst topic and its suggestion
      const [worstTopic, { correct: c, total: t }] = weakTopics[0];
      const suggestion = getTopicSuggestion(category, worstTopic, c, t);
      // Extract just the study advice part (after the score)
      const studyAdvice = suggestion.includes("—") ? suggestion.split("—")[1].trim() : suggestion;
      reason = `${correct}/${total} correct (${pct}%) — ${studyAdvice}`;
    } else {
      reason = `${correct}/${total} correct (${pct}%) — focus on this area.`;
    }
    
    results.push({
      name: category,
      score: correct,
      total,
      passed,
      reason,
    });
  });
  return results;
}

/**
 * Get topic-level roadmap steps — breaks down categories into individual topic steps.
 * For Power BI, parses study suggestion into individual topics (Dashboards, ETL, KPIs, etc.).
 * Returns array of topic-level steps for the roadmap diagram.
 */
export function getTopicLevelRoadmapSteps(verificationResults, declaredSkills) {
  const categories = getCategoriesFromDeclaration(declaredSkills);
  if (categories.length === 0) {
    return getTopicBasedResults(verificationResults, []);
  }
  
  const topicSteps = [];
  
  categories.forEach((category) => {
    const allQuestions = QUIZ_QUESTIONS[category] || [];
    const questions = allQuestions.filter((q) => Object.prototype.hasOwnProperty.call(verificationResults, q.id));
    
    if (questions.length === 0) {
      // No quiz results yet - for Power BI, show individual topics from study suggestion
      if (category === "Power BI") {
        const powerBITopics = ["Dashboards", "ETL", "KPIs", "Star/snowflake schema", "Data modeling"];
        powerBITopics.forEach((topic) => {
          topicSteps.push({
            name: topic,
            score: 0,
            total: 0,
            passed: false,
            reason: "Take the quiz to see your result.",
          });
        });
      } else {
        // For other categories, show category as single step
        topicSteps.push({
          name: category,
          score: 0,
          total: 0,
          passed: false,
          reason: "Take the quiz to see your result.",
        });
      }
      return;
    }
    
    // Group questions by topic
    const byTopic = {};
    questions.forEach((q) => {
      const topic = q.topic || "General";
      if (!byTopic[topic]) byTopic[topic] = { correct: 0, total: 0, questions: [] };
      byTopic[topic].total += 1;
      byTopic[topic].questions.push(q);
      if (verificationResults[q.id] === true) {
        byTopic[topic].correct += 1;
      }
    });
    
    // For Power BI, break down into individual topics from study suggestion
    if (category === "Power BI") {
      const powerBITopics = [
        { name: "Dashboards", keywords: ["dashboard", "visual", "display", "metrics"] },
        { name: "ETL", keywords: ["etl", "extract", "transform", "load", "incremental"] },
        { name: "KPIs", keywords: ["kpi", "key performance", "indicator"] },
        { name: "Star/snowflake schema", keywords: ["schema", "star", "snowflake", "dimension", "fact table"] },
        { name: "Data modeling", keywords: ["model", "modeling", "cardinality", "surrogate", "normalization"] }
      ];
      const categoryTotal = questions.length;
      // Always show all 5 Power BI topics
      powerBITopics.forEach((topicInfo) => {
        const topicName = topicInfo.name;
        // Map topic name to questions based on keywords
        let topicQuestions = questions.filter((q) => 
          topicInfo.keywords.some(keyword => q.question.toLowerCase().includes(keyword))
        );
        
        // If no specific questions found, distribute evenly across topics
        if (topicQuestions.length === 0 && questions.length > 0) {
          const perTopic = Math.max(1, Math.floor(categoryTotal / powerBITopics.length));
          const startIdx = powerBITopics.indexOf(topicInfo) * perTopic;
          topicQuestions = questions.slice(startIdx, Math.min(startIdx + perTopic, questions.length));
        }
        
        const topicTotal = topicQuestions.length;
        const topicCorrect = topicQuestions.filter((q) => verificationResults[q.id] === true).length;
        const topicPassed = topicTotal > 0 && topicCorrect / topicTotal >= PASS_THRESHOLD;
        const topicPct = topicTotal > 0 ? Math.round((topicCorrect / topicTotal) * 100) : 0;
        
        // Create study suggestion for this specific topic
        let studyAdvice;
        if (topicName === "Dashboards") {
          studyAdvice = "Review dashboard design, visualizations, and performance optimization.";
        } else if (topicName === "ETL") {
          studyAdvice = "Review Extract, Transform, Load processes and incremental loading.";
        } else if (topicName === "KPIs") {
          studyAdvice = "Review Key Performance Indicators and metric design.";
        } else if (topicName === "Star/snowflake schema") {
          studyAdvice = "Review star and snowflake schema patterns and dimensional modeling.";
        } else if (topicName === "Data modeling") {
          studyAdvice = "Review data modeling concepts, normalization, and cardinality.";
        } else {
          studyAdvice = `Review ${topicName.toLowerCase()}.`;
        }
        
        // Always include this topic step, even if no questions matched
        topicSteps.push({
          name: topicName,
          score: topicCorrect,
          total: topicTotal,
          passed: topicPassed,
          reason: topicTotal > 0 
            ? `${topicCorrect}/${topicTotal} correct (${topicPct}%) — ${studyAdvice}`
            : categoryTotal > 0
            ? `Review ${topicName.toLowerCase()}.`
            : "Take the quiz to see your result.",
        });
      });
    } else {
      // For other categories, show topics from quiz questions
      const topicEntries = Object.entries(byTopic);
      if (topicEntries.length === 0) {
        topicSteps.push({
          name: category,
          score: 0,
          total: 0,
          passed: false,
          reason: "Take the quiz to see your result.",
        });
      } else {
        topicEntries.forEach(([topic, { correct, total }]) => {
          const passed = total > 0 && correct / total >= PASS_THRESHOLD;
          const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
          const suggestion = getTopicSuggestion(category, topic, correct, total);
          const studyAdvice = suggestion.includes("—") ? suggestion.split("—")[1].trim() : suggestion;
          
          topicSteps.push({
            name: topic,
            score: correct,
            total,
            passed,
            reason: total > 0
              ? `${correct}/${total} correct (${pct}%) — ${studyAdvice}`
              : "Take the quiz to see your result.",
          });
        });
      }
    }
  });
  
  return topicSteps;
}

/**
 * Get results for every category (for diagram display).
 * Always returns all 4 categories so the roadmap always shows multiple items.
 * Declared + quiz-attempted categories get real scores; others get "Declare and take the quiz".
 */
export function getAllCategoryResults(verificationResults, declaredSkills) {
  const results = [];
  ALL_ROADMAP_CATEGORIES.forEach((category) => {
    const allQuestions = QUIZ_QUESTIONS[category] || [];
    const questions = allQuestions.filter((q) => Object.prototype.hasOwnProperty.call(verificationResults, q.id));
    if (questions.length === 0) {
      results.push({
        name: category,
        score: 0,
        total: 0,
        passed: false,
        reason: "Declare this skill and take the quiz to see your result.",
      });
      return;
    }

    let correct = 0;
    questions.forEach((q) => {
      if (verificationResults[q.id] === true) correct += 1;
    });
    const total = questions.length;
    const passed = correct / total >= PASS_THRESHOLD;
    const pct = Math.round((correct / total) * 100);
    results.push({
      name: category,
      score: correct,
      total,
      passed,
      reason: passed
        ? `${correct}/${total} correct (${pct}%) — keep practicing.`
        : `${correct}/${total} correct (${pct}%) — focus on this area.`,
    });
  });
  return results;
}

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
    "Power BI": { BI: "Review dashboards, ETL, KPIs, star/snowflake schema, and data modeling." },
    Blockchain: { Blockchain: "Review distributed ledger, smart contracts, consensus, and security (reentrancy)." },
    "Cyber Security": { Security: "Review CIA triad, OWASP, hashing/salting, XSS/CSRF, and secure coding." },
    "Data Analyst": { Analytics: "Review SQL (JOINs, GROUP BY), statistics, visualization, and ETL." },
    "Game Development": { "Game Dev": "Review game loop, physics, ECS, networking, and performance (culling, batching)." },
    "Machine Learning": { ML: "Review train/test split, overfitting, metrics (precision/recall), and regularization." },
    AWS: { AWS: "Review EC2, S3, IAM, VPC, and high availability (multi-AZ, load balancing)." },
  };
  const text = (study[category] && study[category][topic]) || `Focus on ${topic} to improve.`;
  return `${score}/${total} (${pct}%) — ${text}`;
}
