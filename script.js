document.addEventListener('DOMContentLoaded', function() {
    // Add this function at the start
    function calculateSpringProgress() {
        const now = new Date();
        const currentMonth = now.getMonth(); // 0-based (0 = January, 4 = May)
        
        // For Spring semester (January = 0 to May = 4)
        if (currentMonth < 0 || currentMonth > 4) return 100;
        
        // Calculate progress (January = 20%, February = 40%, March = 60%, April = 80%, May = 100%)
        const progress = Math.min(100, Math.round(((currentMonth + 1) / 5) * 100));
        return progress;
    }

    function calculateResearchProgress() {
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        
        // Research period: August 2024 (month 7) to May 2025 (month 4)
        // Total duration: 10 months
        
        if (currentYear < 2024 || (currentYear === 2024 && currentMonth < 7)) {
            return 0;  // Not started yet
        }
        if (currentYear > 2025 || (currentYear === 2025 && currentMonth > 4)) {
            return 100;  // Completed
        }
        
        // Calculate months elapsed since August 2024
        let monthsElapsed;
        if (currentYear === 2024) {
            monthsElapsed = currentMonth - 7;  // Months since August
        } else {
            monthsElapsed = (12 - 7) + (currentMonth + 1);  // Months in 2024 + months in 2025
        }
        
        return Math.round((monthsElapsed / 10) * 100);  // Convert to percentage
    }

    // Get the dynamic progress values
    const currentProgress = calculateSpringProgress();
    const researchProgress = calculateResearchProgress();

    // Update the categoryData to use dynamic progress for in-progress items
    const categoryData = {
        'Experiences': [
            {
                status: 'complete',
                title: 'Research Assistant (AudioGene)- University of Iowa',
                solution: 'https://audiogene.eng.uiowa.edu/',
                progress: researchProgress,  // Using research-specific progress
                difficulty: 'Hard',
                timeline: 'Aug 2024 - Present'
            },
            {
                status: 'complete',
                title: 'Software Engineer Intern - John Deere',
                solution: 'https://www.deere.com/en/technology-products/precision-ag-technology/operations-center/',
                progress: '100',
                difficulty: 'Medium',
                timeline: 'May 2024 - Aug 2024'
            },
            {
                status: 'complete',
                title: 'Software Engineer Intern - Collins Aerospace',
                solution: 'https://www.collinsaerospace.com/',
                progress: '100',
                difficulty: 'Hard',
                timeline: 'May 2023 - Sep 2023'
            },
            {
                status: 'complete',
                title: 'Teaching Assistant - Computers in Engineering',
                solution: 'https://myui.uiowa.edu/my-ui/courses/details.page?ci=148382&id=1048581',
                progress: '100',
                difficulty: 'Medium',
                timeline: 'Jan 2023 - Dec 2023'
            },
            {
                status: 'complete',
                title: 'Research Assistant (STEM Innovator) - University of Iowa',
                solution: 'https://app.steminnovator.com/#/',
                progress: '100',
                difficulty: 'Easy',
                timeline: 'Apr 2022 - Aug 2024'
            },
            {
                status: 'complete',
                title: 'Software Development Intern - Bio::Neos',
                solution: 'https://bioneos.com/about/',
                progress: '100',
                difficulty: 'Medium',
                timeline: 'May 2021 - Aug 2021'
            }
        ],
        'Projects': [
            {
                status: 'complete',
                title: 'SmartDart',
                solution: 'https://github.com/Nate-Schaefer/SmartDart-App',
                progress: currentProgress,
                difficulty: 'Hard',
                timeline: 'Jan 2025 - Present'
            },
            {
                status: 'complete',
                title: 'FarmVision',
                solution: 'https://github.com/Nick-Hageman/FarmVision',
                progress: '100',
                difficulty: 'Medium',
                timeline: 'Sep 2023'
            },
            {
                status: 'complete',
                title: 'Shards of the Grid',
                solution: 'https://github.com/olduiowahjmjohnsonSELT2024/projectdirectory-selt_2024_team_003',
                progress: '100',
                difficulty: 'Hard',
                timeline: 'Oct 2024 - Dec 2024'
            },
            {
                status: 'complete',
                title: 'DriveSense',
                solution: 'https://github.com/Nick-Hageman/ECE-5550-Internet-of-Things',
                progress: '100',
                difficulty: 'Medium',
                timeline: 'Jan 2024 - May 2024'
            },
            {
                status: 'complete',
                title: 'The Gauntlet',
                solution: 'https://myui.uiowa.edu/my-ui/courses/details.page?ci=148347&id=1015825',
                progress: '100',
                difficulty: 'Easy',
                timeline: 'March 2024 - May 2024'
            },
        ],
        'Notable Coursework': [
            {
                status: 'complete',
                title: 'High Performance Computer Architecture',
                solution: 'https://myui.uiowa.edu/my-ui/courses/details.page?ci=155741&id=1029407',
                progress: currentProgress,
                difficulty: 'Hard',
                timeline: 'Spring 2025'
            },
            {
                status: 'complete',
                title: 'Large Language Models',
                solution: 'https://myui.uiowa.edu/my-ui/courses/details.page?ci=148347&id=1033007',
                progress: currentProgress,
                difficulty: 'Medium',
                timeline: 'Spring 2025'
            },
            {
                status: 'complete',
                title: 'Algorithms',
                solution: 'https://myui.uiowa.edu/my-ui/courses/details.page?ci=158661&id=998472',
                progress: '100',
                difficulty: 'Hard',
                timeline: 'Fall 2023'
            },
            {
                status: 'complete',
                title: 'Data Structures',
                solution: 'https://myui.uiowa.edu/my-ui/courses/details.page?ci=158653&id=980324',
                progress: '100',
                difficulty: 'Easy',
                timeline: 'Spring 2023'
            },
            {
                status: 'complete',
                title: 'Embedded Systems',
                solution: 'https://myui.uiowa.edu/my-ui/courses/details.page?ci=152501&id=1005336',
                progress: '100',
                difficulty: 'Hard',
                timeline: 'Spring 2024'
            },
            {
                status: 'complete',
                title: 'Internet of Things',
                solution: 'https://myui.uiowa.edu/my-ui/courses/details.page?ci=170588&id=1007045',
                progress: '100',
                difficulty: 'Easy',
                timeline: 'Spring 2024'
            },
            {
                status: 'complete',
                title: 'Applied Machine Learning',
                solution: 'https://myui.uiowa.edu/my-ui/courses/details.page?ci=148347&id=1008967',
                progress: '100',
                difficulty: 'Hard',
                timeline: 'Spring 2024'
            },
            {
                status: 'complete',
                title: 'Machine Learning',
                solution: 'https://myui.uiowa.edu/my-ui/courses/details.page?ci=151569&id=1020160',
                progress: '100',
                difficulty: 'Medium',
                timeline: 'Fall 2024'
            },
            {
                status: 'complete',
                title: 'Virtual Reality',
                solution: 'https://myui.uiowa.edu/my-ui/courses/details.page?ci=148347&id=1015825',
                progress: '100',
                difficulty: 'Easy',
                timeline: 'Spring 2024'
            },
            {
                status: 'complete',
                title: 'Computer Architecture and Organization',
                solution: 'https://myui.uiowa.edu/my-ui/courses/details.page?ci=149932&id=1004975',
                progress: '100',
                difficulty: 'Easy',
                timeline: 'Spring 2024'
            }
        ]
    };

    // Sort functionality
    const sortableHeaders = document.querySelectorAll('th.sortable');
    
    sortableHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const table = this.closest('table');
            const index = Array.from(this.parentElement.children).indexOf(this);
            const rows = Array.from(table.querySelectorAll('tbody tr'));
            
            // Toggle sort direction
            const isAscending = this.classList.contains('asc');
            
            // Reset all headers
            sortableHeaders.forEach(h => {
                h.classList.remove('asc', 'desc');
                h.querySelector('i').className = 'fas fa-sort';
            });
            
            // Set current header
            if (isAscending) {
                this.classList.add('desc');
                this.querySelector('i').className = 'fas fa-sort-down';
            } else {
                this.classList.add('asc');
                this.querySelector('i').className = 'fas fa-sort-up';
            }
            
            // Helper function to convert date string to comparable value
            function getDateValue(dateStr) {
                // Handle season formats
                if (dateStr.includes('Spring')) return new Date(dateStr.replace('Spring', 'March'));
                if (dateStr.includes('Summer')) return new Date(dateStr.replace('Summer', 'June'));
                if (dateStr.includes('Fall')) return new Date(dateStr.replace('Fall', 'September'));
                if (dateStr.includes('Winter')) return new Date(dateStr.replace('Winter', 'December'));
                
                // Handle date ranges - take the first date
                const firstDate = dateStr.split(' - ')[0];
                
                // Convert month abbreviations to numbers
                const months = {
                    'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06',
                    'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
                };
                
                // Parse the date string
                const parts = firstDate.split(' ');
                if (parts.length === 2) {
                    const month = months[parts[0].substring(0, 3)];
                    const year = parts[1];
                    return new Date(`${year}-${month}-01`);
                }
                
                return new Date(firstDate);
            }
            
            // Sort rows
            rows.sort((a, b) => {
                const cellA = a.querySelectorAll('td')[index].textContent;
                const cellB = b.querySelectorAll('td')[index].textContent;
                
                if (index === 5) { // Timeline column
                    const dateA = getDateValue(cellA);
                    const dateB = getDateValue(cellB);
                    return isAscending ? dateB - dateA : dateA - dateB;
                } else if (!isNaN(parseFloat(cellA)) && !isNaN(parseFloat(cellB))) {
                    return isAscending ? 
                        parseFloat(cellB) - parseFloat(cellA) : 
                        parseFloat(cellA) - parseFloat(cellB);
                } else {
                    return isAscending ? 
                        cellB.localeCompare(cellA) : 
                        cellA.localeCompare(cellB);
                }
            });
            
            // Re-append rows in new order
            const tbody = table.querySelector('tbody');
            rows.forEach(row => tbody.appendChild(row));
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-container input');
    
    searchInput.addEventListener('keyup', function() {
        const query = this.value.toLowerCase();
        const rows = document.querySelectorAll('.projects-table tbody tr');
        
        rows.forEach(row => {
            const title = row.querySelectorAll('td')[1].textContent.toLowerCase();
            if (title.includes(query)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // Modal functionality
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const closeModal = document.querySelector('#projectModal .close-modal');

    // Project descriptions - you can expand this with real project data
    const projectDescriptions = {
        'SmartDart': {
            image: 'assets/smartDart.png',
            description: `
                SmartDart is an innovative AI-powered dart tracking system using computer vision. 
                The system uses a camera to track dart throws and provides real-time feedback on accuracy and technique. 
                A companion app allows users to play against a computer or another player online.
                Our team raised $5,000 dollars in funding from the Iowa Innovation Challenge. <a href="https://engineering.uiowa.edu/news-all/2024/11/iowa-engineers-win-39500-iowa-innovation-challenge" target="_blank">Featured Article</a>
                <br><br>
                <a href="https://www.youtube.com/watch?v=gnmK5E1Q8xQ" target="_blank">Demo Video</a>
                <br><br>
                Key features:
                <ul>
                    <li>Real-time dart trajectory tracking</li>
                    <li>Score detection and automatic scoring</li>
                    <li>Performance analytics and improvement suggestions</li>
                    <li>Mobile app integration for tracking progress</li>
                </ul>
            `,
            categories: ['Computer Vision', 'Machine Learning', 'Mobile Development'],
            skills: ['Python', 'OpenCV', 'TensorFlow', 'Swift', 'Firebase', 'GitHub']
        },
        'FarmVision': {
            image: 'assets/FarmVision.png',
            description: `Displayed agricultural field data (such as field moisture) in Virtual Reality by utilizing John Deere Precision Ag APIs. 
            Awarded "Best Data Collection Hack" at HackUIowa 2023. 
            <br><br>
            <a href="https://devpost.com/software/farmvision" target="_blank">Devpost</a>
            <br><br>
            <a href="https://github.com/Nick-Hageman/FarmVision" target="_blank">Source Code</a>
            `,
            categories: ['Virtual Reality'],
            skills: ['Unity', 'C#']
        },
        'DriveSense': {
            image: 'assets/drivesense.png',
            description: `Utilized computer vision to monitor and record driver distractedness with a Raspberry Pi running Teachable Machine. 
            Created a React dashboard application to graph our data using MaterialUI data visualization components with Firebase as the cloud storage. 
            <br><br>
            <a href="https://github.com/Nick-Hageman/ECE-5550-Internet-of-Things" target="_blank">Source Code</a>
            <br><br>
            <a href="https://www.youtube.com/watch?v=eQbKFbBmM1s" target="_blank">Demo Video</a>
            `,
            categories: ['Computer Vision', 'IoT', 'Web Development'],
            skills: ['Python', 'TensorFlow', 'React', 'materialUI', 'Firebase', 'Raspberry Pi', 'GitHub']
        },
        'Shards of the Grid': {
            image: 'assets/shards.png',
            description: `Capstone project for <a href="https://myui.uiowa.edu/my-ui/courses/details.page?ci=150176&id=1018965" target="_blank">Software Engineering Languages and Tools</a>. 
            Created a Grid-based multi-player RPG-based video game using Ruby on Rails and modern software engineering practices.
            <br><br>
            Key features:
            <ul>
                <li>Implemented RESTful API services for game state management</li>
                <li>Utilized Test-Driven Development with RSpec and Cucumber for behavior testing</li>
                <li>Developed using Agile methodologies including pair programming and sprint planning</li>
                <li>Built with MVC architecture and SaaS design patterns</li>
                <li>Integrated JavaScript and AJAX for real-time game updates</li>
            </ul>
            <br>
            <a href="https://github.com/olduiowahjmjohnsonSELT2024/projectdirectory-selt_2024_team_003" target="_blank">Source Code</a>
            <br><br>
            <a href="https://www.youtube.com/watch?v=QLRdmToCWGQ" target="_blank">Demo Video</a>
            `,
            categories: [
                'Full-Stack Development', 
                'Web Development', 
                'SaaS', 
                'Test-Driven Development'
            ],
            skills: [
                'Ruby', 
                'Rails', 
                'JavaScript', 
                'AJAX', 
                'RSpec', 
                'Cucumber', 
                'GitHub'
            ]
        },
        'The Gauntlet': {
            image: 'assets/VarFinalDemo.mp4',
            description: `Capstone project of multi-stage challenge game is shown above. 
            Some challenges included zero gravity, propulsion, enemy collision detection, animations and AI navigation.
            `,
            categories: ['Virtual Reality'],
            skills: ['Unity', 'C#']
        },
        'High Performance Computer Architecture': {
            description: `Graduate course analyzing modern machine architectures using HDL simulation. Students evaluate relationships between computer design and design goals.
            <br><br>
            Key topics:
            <ul>
                <li>Pipeline Processing and Vector Machines</li>
                <li>Hierarchical Memory Design</li>
                <li>Multiprocessor Architectures</li>
                <li>Parallel Algorithm Design Techniques</li>
                <li>Hardware Description Language Simulation</li>
            </ul>
            Project 1 included simulating x86 and RISC-V ISAs with Gem5 to analyze runtime and CPI stats. Also included 
            <br><br>
            <a href="https://myui.uiowa.edu/my-ui/courses/details.page?ci=155741&id=1029407" target="_blank">Course Details</a>
            `,
            categories: ['Computer Architecture'],
            skills: ['Gem5', 'RISC-V', 'x86', 'HDL', 'Verilog']
        },
        'Large Language Models': {
            description: `Introduction to modern NLP techniques with emphasis on language models. Explores systems capable of text translation, question answering, and conversational AI.
            <br><br>
            Key topics:
            <ul>
                <li>Language Modeling and Representation Learning</li>
                <li>Deep Learning Approaches for NLP</li>
                <li>Text Classification and Sequence Tagging</li>
                <li>Machine Translation</li>
                <li>Transformer Architecture</li>
            </ul>
            <br><br>
            <a href="https://myui.uiowa.edu/my-ui/courses/details.page?ci=148347&id=1033007" target="_blank">Course Details</a>
            `,
            categories: ['Natural Language Processing', 'Machine Learning'],
            skills: ['PyTorch', 'Python']
        },
        'Algorithms': {
            description: `Advanced course on algorithm design techniques and analysis. Includes daily pre-assignments, group work, and programming assignments.
            <br><br>
            Key topics:
            <ul>
                <li>Divide and Conquer, Dynamic Programming</li>
                <li>Advanced Sorting (Merge Sort, Heapsort, Quicksort)</li>
                <li>Tree Structures (B-trees, Red-Black Trees)</li>
                <li>Graph Algorithms and Shortest Paths</li>
                <li>NP-Completeness and Complexity Analysis</li>
            </ul>
            <br><br>
            <a href="https://myui.uiowa.edu/my-ui/courses/details.page?ci=158661&id=998472" target="_blank">Course Details</a>
            `,
            categories: ['Algorithms', 'Data Structures'],
            skills: ['Python']
        },
        'Data Structures': {
            description: `Fundamental course on data organization and object-oriented programming concepts. Focuses on implementation and application of core data structures.
            <br><br>
            Key topics:
            <ul>
                <li>Linked Lists, Stacks, and Queues</li>
                <li>Hash Tables and Tree Structures</li>
                <li>Object-Oriented Programming Concepts</li>
                <li>Generic Interfaces and Classes</li>
                <li>Software Design Patterns</li>
            </ul>
            <br><br>
            <a href="https://myui.uiowa.edu/my-ui/courses/details.page?ci=158653&id=980324" target="_blank">Course Details</a>
            `,
            categories: ['Data Structures'],
            skills: ['Java']
        },
        'Embedded Systems': {
            description: `Comprehensive study of microprocessors and microcontrollers in engineering systems. Covers both low-level and high-level software design.
            <br><br>
            Key topics:
            <ul>
                <li>Microcontroller Architecture and Interfacing</li>
                <li>Interrupts and Memory Management</li>
                <li>Operating System Fundamentals</li>
                <li>Task Scheduling and Context Switching</li>
                <li>Device Drivers and Interprocess Communication</li>
            </ul>
            <br><br>
            <a href="https://myui.uiowa.edu/my-ui/courses/details.page?ci=152501&id=1005336" target="_blank">Course Details</a>
            `,
            categories: ['Embedded Systems', 'Networking'],
            skills: ['C', 'Assembly', 'Microcontrollers', 'Raspberry Pi']
        },
        'Internet of Things': {
            description: `Comprehensive course on IoT applications and their impact across various industries. Includes hands-on projects implementing IoT solutions.
            <br><br>
            Key topics:
            <ul>
                <li>IoT Logical and Physical Structure</li>
                <li>IoT Devices, Platforms, and Endpoints</li>
                <li>Security and Privacy in IoT</li>
                <li>IoT Data Analytics</li>
                <li>Real-world IoT Applications</li>
            </ul>
            <br><br>
            <a href="https://myui.uiowa.edu/my-ui/courses/details.page?ci=170588&id=1007045" target="_blank">Course Details</a>
            `,
            categories: ['IoT', 'Networking', 'Cloud Computing'],
            skills: ['Python', 'Raspberry Pi']
        },
        'Applied Machine Learning': {
            description: `Hands-on course implementing deep learning algorithms in PyTorch with focus on practical applications.
            <br><br>
            Key topics:
            <ul>
                <li>Convolutional Neural Networks and Backpropagation</li>
                <li>Support Vector Machines and Kernel Methods</li>
                <li>Optimization and Normalization Techniques</li>
                <li>Unsupervised Learning and PCA</li>
                <li>Generative Adversarial Networks</li>
            </ul>
            <br><br>
            <a href="https://myui.uiowa.edu/my-ui/courses/details.page?ci=148347&id=1008967" target="_blank">Course Details</a>
            `,
            categories: ['Machine Learning'],
            skills: ['Python', 'PyTorch']
        },
        'Machine Learning': {
            description: `Fundamental course covering machine learning theory and engineering applications.
            <br><br>
            Key topics:
            <ul>
                <li>Regression and Classification</li>
                <li>Neural Networks</li>
                <li>Clustering Algorithms</li>
                <li>Principal Component Analysis</li>
                <li>Engineering Applications</li>
            </ul>
            <br><br>
            <a href="https://myui.uiowa.edu/my-ui/courses/details.page?ci=151569&id=1020160" target="_blank">Course Details</a>
            `,
            categories: ['Machine Learning'],
            skills: ['Python', 'PyTorch']
        },
        'Virtual Reality': {
            description: `Project-based course exploring VR/AR technologies using Unity and Meta Quest 2 headsets. Students develop 3D experiences for AR and VR applications. 
            <br><br>
            Key topics:
            <ul>
                <li>Unity Game Engine Development</li>
                <li>C# Programming for VR Applications</li>
            </ul>
            <br><br>
            <a href="https://myui.uiowa.edu/my-ui/courses/details.page?ci=148347&id=1015825" target="_blank">Course Details</a>
            `,
            categories: ['Virtual Reality'],
            skills: ['Unity', 'C#']
        },
        'Computer Architecture and Organization': {
            description: `Fundamental course covering computer evolution and processor design. Students design and simulate a simple processor using hardware description languages.
            <br><br>
            Key topics:
            <ul>
                <li>CISC/RISC Instruction Sets and Assembly Programming</li>
                <li>ALU Design and Arithmetic Algorithms</li>
                <li>Memory Hierarchies and Cache Design</li>
                <li>Pipelining and Multiprocessing</li>
                <li>Hardware Description Languages (Verilog, VHDL)</li>
            </ul>
            <br><br>
            <a href="https://myui.uiowa.edu/my-ui/courses/details.page?ci=149932&id=1004975" target="_blank">Course Details</a>
            `,
            categories: ['Computer Architecture'],
            skills: ['Verilog']
        },
        'Research Assistant (AudioGene)- University of Iowa': {
            logo: 'assets/audiogene.png',
            description: `Currently working on improving Data Visualization tools for machine learning models in diagnosing Autosomal Dominant Non-Syndromic Hearing Loss.
            Also working on creating a custom confidence rating for a previously developed ensemble machine learning model.
            <br><br>
            Check out our work at <a href="https://audiogene.eng.uiowa.edu/" target="_blank">AudioGene</a>
            <br><br>
            `,
            categories: ['Web Development', ' Development', 'Machine Learning', 'Research'],
            skills: ['Python', 'Flask', 'JavaScript', 'React', 'Docker', 'MySQL', 'GitLab']
        },
        'Research Assistant (STEM Innovator) - University of Iowa': {
            logo: 'assets/stem_innovator.jpeg',
            description: `Conducted data analysis and research for U.S. Department of Education grant-supported work.
            <br><br>
            Key contributions:
            <ul>
                <li>Performed data analysis for educational research projects</li>
                <li>Created peer-reviewed conference presentations and research articles</li>
                <li>Utilized R for statistical analysis and data visualization</li>
            </ul>`,
            categories: ['Research'],
            skills: ['R', 'Python']
        },
        'Software Engineer Intern - John Deere': {
            logo: 'assets/john_deere.png',
            description: `Worked on the Images team as part of the Operations Center tool.
            <br><br>
            Key accomplishments:
            <ul>
                <li>Developed a Go API to generate SVG images with machine pass lines and directional arrows for field map overlays</li>
                <li>Implemented an AWS Lambda replacing 414 existing ECS servers, projected to save $3.6 million annually</li>
            </ul>`,
            categories: ['Cloud Computing', 'Backend Development'],
            skills: ['AWS', 'Go', 'Terraform', 'GitHub']
        },
        'Software Engineer Intern - Collins Aerospace': {
            logo: 'assets/collins_aerospace.jpeg',
            description: `Worked on the Dataloader Team as part of the KC-46 RVS 2.0 Program.
            <br><br>
            Key accomplishments:
            <ul>
                <li>Designed and developed a UDP-based network tool for testing, using socket programming with Java and C++</li>
                <li>Enhanced internally used application to support new file formats and improve efficiency</li>
            </ul>`,
            categories: ['DO-178C', 'Test-Driven Development'],
            skills: ['C++', 'Java', 'Subversion']
        },
        'Teaching Assistant - Computers in Engineering': {
            logo: 'assets/iowa.png',
            description: `Provided comprehensive teaching support for computer engineering fundamentals courses.
            <br><br>
            Key responsibilities:
            <ul>
                <li>Delivered tutorials and instruction for C++ programming and Linux systems</li>
                <li>Provided practical and timely feedback to over 300 students</li>
                <li>Taught for both <a href="https://myui.uiowa.edu/my-ui/courses/details.page?ci=155147&id=985130" target="_blank">Introduction to Engineering Computing</a> and <a href="https://myui.uiowa.edu/my-ui/courses/details.page?ci=148382&id=996953" target="_blank">Computers in Engineering</a></li>
            </ul>`,
            categories: ['Teaching'],
            skills: ['C++', 'Linux', 'Subversion']
        },
        'Software Development Intern - Bio::Neos': {
            logo: 'assets/bio_neos.png',
            description: `Developed IoT solutions for agricultural monitoring applications.
            <br><br>
            Key projects:
            <ul>
                <li>Built web application for real-time soil moisture monitoring</li>
                <li>Designed and implemented SQLite database for plant and sensor data</li>
                <li>Developed RESTful API routes for microcontroller communication</li>
            </ul>`,
            categories: ['IoT', 'Web Development', 'Full-stack Development'],
            skills: ['JavaScript', 'MySQL', 'GitHub']
        }
    };

    // Update the attachProjectClickHandlers function
    function attachProjectClickHandlers() {
        document.querySelectorAll('.projects-table tbody tr').forEach(row => {
            const titleCell = row.querySelectorAll('td')[1];
            titleCell.classList.add('project-title');
            
            titleCell.addEventListener('click', function() {
                const title = this.textContent;
                const cleanTitle = title.includes('. ') ? title.split('. ')[1] : title;
                const projectInfo = projectDescriptions[cleanTitle];
                
                modalTitle.textContent = cleanTitle;
                
                if (projectInfo) {
                    const modalImage = document.getElementById('modalImage');
                    const modalDescription = document.getElementById('modalDescription');
                    
                    if (projectInfo.logo) {
                        // Check if the file is a video
                        const isVideo = projectInfo.logo.toLowerCase().endsWith('.mp4');
                        
                        if (isVideo) {
                            modalImage.innerHTML = `
                                <video controls width="100%">
                                    <source src="${projectInfo.logo}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>`;
                        } else {
                            // Check if it's a logo or project image
                            const imageClass = projectInfo.logo ? 'company-logo' : 'project-image';
                            modalImage.innerHTML = `<img src="${projectInfo.logo}" alt="${cleanTitle}" class="${imageClass}">`;
                        }
                        modalImage.style.display = 'block';
                    } else {
                        modalImage.style.display = 'none';
                    }
                    
                    if (projectInfo.categories || projectInfo.skills) {
                        const tagsHtml = `
                            <div class="modal-tags">
                                ${projectInfo.categories ? `
                                    <div class="tags-section">
                                        <h4>Categories</h4>
                                        <div class="tags-container">
                                            ${projectInfo.categories.map(tag => `
                                                <span class="tag category-tag">${tag}</span>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                                ${projectInfo.skills ? `
                                    <div class="tags-section">
                                        <h4>Technologies</h4>
                                        <div class="tags-container">
                                            ${projectInfo.skills.map(tag => `
                                                <span class="tag skill-tag">${tag}</span>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        `;
                        modalDescription.innerHTML = projectInfo.description + tagsHtml;
                    } else {
                        modalDescription.innerHTML = projectInfo.description;
                    }
                } else {
                    document.getElementById('modalImage').style.display = 'none';
                    document.getElementById('modalDescription').textContent = 'Project description not available.';
                }
                
                modal.style.display = 'block';
                setTimeout(() => {
                    modal.classList.add('show');
                }, 10);
            });
        });
    }

    // Add this function to collect unique categories and skills
    function getUniqueTagsFromSection(section, tagType) {
        const items = Object.entries(projectDescriptions)
            .filter(([key]) => categoryData[section].some(item => item.title === key))
            .map(([_, value]) => value[tagType] || []);
        
        return [...new Set(items.flat())].sort();
    }

    // Add this function before updateDropdowns
    function attachDropdownListeners() {
        // Add click handlers for dropdown items
        document.querySelectorAll('.dropdown-content a').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from siblings
                const siblings = this.parentElement.querySelectorAll('a');
                siblings.forEach(sibling => sibling.classList.remove('active'));
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // Update button text
                const dropdownButton = this.parentElement.previousElementSibling;
                const buttonText = this.textContent;
                dropdownButton.innerHTML = `${buttonText} <i class="fas fa-chevron-down"></i>`;
                
                // Reset text for "All" options
                if (this.dataset.category === 'all') {
                    dropdownButton.innerHTML = `Categories <i class="fas fa-chevron-down"></i>`;
                } else if (this.dataset.skill === 'all') {
                    dropdownButton.innerHTML = `Skills <i class="fas fa-chevron-down"></i>`;
                }
                
                // Update filter
                filterTable();
            });
        });

        // Show/hide dropdown content on button click
        document.querySelectorAll('.dropdown button').forEach(button => {
            button.addEventListener('click', function() {
                const content = this.nextElementSibling;
                
                // Close all other dropdowns
                document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                    if (dropdown !== content) {
                        dropdown.classList.remove('show');
                    }
                });
                
                // Toggle current dropdown
                content.classList.toggle('show');
            });
        });

        // Close dropdowns when clicking outside
        window.addEventListener('click', function(e) {
            if (!e.target.matches('.dropdown button') && !e.target.matches('.dropdown button *')) {
                document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                    dropdown.classList.remove('show');
                });
            }
        });
    }

    // Update dropdown content based on selected section
    function updateDropdowns(section) {
        const categories = getUniqueTagsFromSection(section, 'categories');
        const skills = getUniqueTagsFromSection(section, 'skills');
        
        // Update Categories dropdown
        const categoriesDropdown = document.querySelector('.dropdown:nth-child(1)');
        categoriesDropdown.innerHTML = `
            <button>Categories <i class="fas fa-chevron-down"></i></button>
            <div class="dropdown-content">
                <a href="#" data-category="all">All</a>
                ${categories.map(category => `
                    <a href="#" data-category="${category.toLowerCase()}">${category}</a>
                `).join('')}
            </div>
        `;
        
        // Update Skills dropdown
        const skillsDropdown = document.querySelector('.dropdown:nth-child(2)');
        skillsDropdown.innerHTML = `
            <button>Skills <i class="fas fa-chevron-down"></i></button>
            <div class="dropdown-content">
                <a href="#" data-skill="all">All</a>
                ${skills.map(skill => `
                    <a href="#" data-skill="${skill.toLowerCase()}">${skill}</a>
                `).join('')}
            </div>
        `;
        const statusDropdown = document.querySelector('.dropdown:nth-child(3)');
        const tagsDropdown = document.querySelector('.dropdown:nth-child(4)');

        statusDropdown.innerHTML = `
            <button>Status <i class="fas fa-chevron-down"></i></button>
            <div class="dropdown-content">
                <a href="#" data-status="all">All</a>
                <a href="#" data-status="complete">Completed</a>
                <a href="#" data-status="in-progress">In Progress</a>
            </div>
        `;

        tagsDropdown.innerHTML = `
            <button>Difficulty <i class="fas fa-chevron-down"></i></button>
            <div class="dropdown-content">
                <a href="#" data-difficulty="all">All</a>
                <a href="#" data-difficulty="easy">Easy</a>
                <a href="#" data-difficulty="medium">Medium</a>
                <a href="#" data-difficulty="hard">Hard</a>
            </div>
        `;

        // Reattach dropdown event listeners
        attachDropdownListeners();
    }

    // Function to update table content
    function updateTableContent(category) {
        const tbody = document.querySelector('.projects-table tbody');
        const data = categoryData[category];
        
        tbody.innerHTML = data.map(item => `
            <tr>
                <td><span class="${parseInt(item.progress) === 100 ? 'status-complete' : 'status-in-progress'}">
                    <i class="fas ${parseInt(item.progress) === 100 ? 'fa-check-circle' : 'fa-clock'}"></i>
                </span></td>
                <td>${item.title}</td>
                <td>${item.solution ? `<a href="${item.solution}" class="solution-link" target="_blank"><i class="fas fa-code"></i></a>` : ''}</td>
                <td>${item.progress}%</td>
                <td><span class="difficulty ${item.difficulty.toLowerCase()}">${item.difficulty}</span></td>
                <td class="timeline-text">${item.timeline}</td>
            </tr>
        `).join('');

        // Reattach click handlers for project titles
        attachProjectClickHandlers();
    }

    // Update the category buttons click handler
    const categoryButtons = document.querySelectorAll('.category-btn');

    // Update the category buttons click handler
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Update search placeholder based on category
            const searchInput = document.querySelector('.search-container input');
            searchInput.placeholder = `Search ${button.textContent}`;
            
            const category = button.textContent;
            updateDropdowns(category);
            updateTableContent(category);
        });
    });

    // Initialize with Experiences
    updateTableContent('Experiences');
    updateDropdowns('Experiences');
    attachProjectClickHandlers();
    // Set initial search placeholder
    document.querySelector('.search-container input').placeholder = 'Search Experiences';

    // Add this after the categoryButtons event listeners
    const pickOneBtn = document.querySelector('.pick-one-btn');

    pickOneBtn.addEventListener('click', () => {
        // Get all visible rows in the current table
        const visibleRows = Array.from(document.querySelectorAll('.projects-table tbody tr'))
            .filter(row => row.style.display !== 'none');
        
        if (visibleRows.length === 0) return;
        
        // Pick a random row
        const randomRow = visibleRows[Math.floor(Math.random() * visibleRows.length)];
        
        // Get the title cell and trigger its click event
        const titleCell = randomRow.querySelectorAll('td')[1];
        
        // Add a brief highlight effect to the selected row
        randomRow.style.transition = 'background-color 0.3s ease';
        randomRow.style.backgroundColor = '#3b4d3c'; // Slightly lighter green
        
        // Scroll the row into view
        randomRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Trigger the click after a small delay for visual effect
        setTimeout(() => {
            titleCell.click();
            // Reset the background color after showing the modal
            setTimeout(() => {
                randomRow.style.backgroundColor = '';
            }, 300);
        }, 300);
    });

    // Add this after your existing modal code
    const getToKnowBtn = document.querySelector('.get-to-know-btn');
    const favoritesModal = document.getElementById('favoritesModal');
    const closeFavoritesModal = favoritesModal.querySelector('.close-modal');

    getToKnowBtn.addEventListener('click', () => {
        favoritesModal.style.display = 'block';
        setTimeout(() => {
            favoritesModal.classList.add('show');
        }, 10);
    });

    closeFavoritesModal.addEventListener('click', () => {
        favoritesModal.classList.remove('show');
        setTimeout(() => {
            favoritesModal.style.display = 'none';
        }, 300);
    });

    // Close on outside click
    window.addEventListener('click', (event) => {
        if (event.target === favoritesModal) {
            closeFavoritesModal.click();
        }
    });

    // Add these modal close handlers
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });

    // Close on outside click
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal.click();
        }
    });

    // Add dropdown functionality for Status and Tags filters
    const statusDropdown = document.querySelector('.dropdown:nth-child(3)');
    const tagsDropdown = document.querySelector('.dropdown:nth-child(4)');

    // Create dropdown content
    statusDropdown.innerHTML = `
        <button>Status <i class="fas fa-chevron-down"></i></button>
        <div class="dropdown-content">
            <a href="#" data-status="all">All</a>
            <a href="#" data-status="complete">Completed</a>
            <a href="#" data-status="in-progress">In Progress</a>
        </div>
    `;

    tagsDropdown.innerHTML = `
        <button>Difficulty <i class="fas fa-chevron-down"></i></button>
        <div class="dropdown-content">
            <a href="#" data-difficulty="all">All</a>
            <a href="#" data-difficulty="easy">Easy</a>
            <a href="#" data-difficulty="medium">Medium</a>
            <a href="#" data-difficulty="hard">Hard</a>
        </div>
    `;

    // Add filter functionality
    function filterTable() {
        const selectedStatus = document.querySelector('.dropdown:nth-child(3) .dropdown-content a.active')?.dataset.status || 'all';
        const selectedDifficulty = document.querySelector('.dropdown:nth-child(4) .dropdown-content a.active')?.dataset.difficulty || 'all';
        const selectedCategory = document.querySelector('.dropdown:nth-child(1) .dropdown-content a.active')?.dataset.category || 'all';
        const selectedSkill = document.querySelector('.dropdown:nth-child(2) .dropdown-content a.active')?.dataset.skill || 'all';
        
        const rows = document.querySelectorAll('.projects-table tbody tr');

        rows.forEach(row => {
            const title = row.querySelectorAll('td')[1].textContent;
            const projectInfo = projectDescriptions[title];
            const isComplete = row.querySelector('td:first-child i').classList.contains('fa-check-circle');
            const difficulty = row.querySelector('.difficulty').textContent.toLowerCase();
            
            const statusMatch = selectedStatus === 'all' || 
                (selectedStatus === 'complete' && isComplete) ||
                (selectedStatus === 'in-progress' && !isComplete);
            
            const difficultyMatch = selectedDifficulty === 'all' || 
                difficulty === selectedDifficulty;

            const categoryMatch = selectedCategory === 'all' ||
                (projectInfo?.categories || []).some(cat => 
                    cat.toLowerCase() === selectedCategory);

            const skillMatch = selectedSkill === 'all' ||
                (projectInfo?.skills || []).some(skill => 
                    skill.toLowerCase() === selectedSkill);

            row.style.display = (statusMatch && difficultyMatch && categoryMatch && skillMatch) ? '' : 'none';
        });
    }

    // Add this after attachDropdownListeners function
    function attachStatusAndDifficultyListeners() {
        // Status dropdown
        const statusDropdown = document.querySelector('.dropdown:nth-child(3)');
        const statusButton = statusDropdown.querySelector('button');
        const statusContent = statusDropdown.querySelector('.dropdown-content');

        statusContent.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from siblings
                statusContent.querySelectorAll('a').forEach(a => a.classList.remove('active'));
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // Update button text
                const buttonText = this.textContent.trim();
                statusButton.innerHTML = `${buttonText === 'All' ? 'Status' : buttonText} <i class="fas fa-chevron-down"></i>`;
                
                // Hide dropdown
                statusContent.classList.remove('show');
                
                // Filter table
                filterTable();
            });
        });

        statusButton.addEventListener('click', function(e) {
            e.stopPropagation();
            statusContent.classList.toggle('show');
        });

        // Difficulty dropdown
        const difficultyDropdown = document.querySelector('.dropdown:nth-child(4)');
        const difficultyButton = difficultyDropdown.querySelector('button');
        const difficultyContent = difficultyDropdown.querySelector('.dropdown-content');

        difficultyContent.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from siblings
                difficultyContent.querySelectorAll('a').forEach(a => a.classList.remove('active'));
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // Update button text
                const buttonText = this.textContent.trim();
                difficultyButton.innerHTML = `${buttonText === 'All' ? 'Difficulty' : buttonText} <i class="fas fa-chevron-down"></i>`;
                
                // Hide dropdown
                difficultyContent.classList.remove('show');
                
                // Filter table
                filterTable();
            });
        });

        difficultyButton.addEventListener('click', function(e) {
            e.stopPropagation();
            difficultyContent.classList.toggle('show');
        });
    }

    // Add this line after updateDropdowns('Experiences')
    attachStatusAndDifficultyListeners();
});