When I joined Microsoft's Azure team, I was excited to work on backend APIs for a manufacturing product that featured a six-month-old copilot as its main selling point. This AI assistant was supposed to let customers ask questions in natural language, but I quickly discovered we had a serious problem. The copilot was only achieving 30-40% accuracy on customer queries, particularly failing when users needed complex database operations with multiple joins. Our current approach relied heavily on basic instructions and vector searches without enough examples, while customers and program managers were demanding more sophisticated query capabilities.

My manager assigned me to quickly transition from my current backend work to join the specialized copilot sub-team, since I had previous experience with AI systems from my time at a startup. I was tasked with increasing the copilot's accuracy from 30-40% to at least 80% within four to six months. Specifically, I needed to enable the system to handle complex customer scenarios involving multiple database joins, which were completely failing at the time. I also had to establish a sustainable monitoring system to track our accuracy improvements over time.

I immediately dove into understanding the root causes of our accuracy problems. First, I analyzed our failing queries and realized the LLM was struggling with complex SQL syntax, especially for multi-table joins. I proposed a different approach: instead of having the AI generate raw SQL, I created predefined database functions that abstracted the complex logic into simpler, more reliable calls. This significantly reduced syntax errors.

Next, I tackled the lack of relevant examples in our prompts. I built a similarity search system that would automatically find and include the most relevant example queries based on the user's request. This gave the LLM much better context for generating accurate responses.

To track our progress systematically, I developed automated pipelines that run weekly accuracy tests on our datasets. This replaced our manual, inconsistent testing process and gave us reliable metrics to measure improvements.

Finally, I simplified our entire query generation approach by reducing complexity through these abstraction functions. Instead of forcing the LLM to handle intricate database operations, I created a more manageable interface that played to the AI's strengths while hiding the complexity behind reliable, tested functions.

The results exceeded our expectations. Within four months, I successfully increased the copilot's accuracy from 30-40% to approximately 80%, hitting our target right on schedule. More importantly, the system could now handle the complex multi-table join scenarios that were completely failing before, which opened up significantly more use cases for our customers.

The weekly monitoring pipelines I established gave us continuous visibility into our performance, replacing the guesswork with concrete data. This meant we could catch any accuracy regressions quickly and maintain our improvements over time. Both our customers and program managers were thrilled with the enhanced functionality - we finally had a copilot that could deliver on the sophisticated query capabilities they'd been requesting.

This experience taught me that adaptability isn't just about switching technologies or teams - it's about fundamentally rethinking your approach when the current path isn't working. Instead of trying to force the existing architecture to work better, I learned to step back and design a solution that played to our strengths while addressing the core problems. The key was being willing to abandon our original approach entirely and embrace a completely different strategy that better suited both the technology's capabilities and our users' needs.



Situation
Joined a Microsoft Azure team working on backend APIs for a manufacturing product that had integrated a 6-month-old copilot feature

The copilot was designed as a selling and highlight feature to allow users to ask questions in natural language

Upon joining, discovered the copilot had very low accuracy of only 30-40% for customer queries

The system was failing specifically when users asked questions that required running complex database queries with multiple joins

Initial technical approach relied on giving instructions and vector searches without sufficient examples in prompts

Customers and program managers were requesting the ability to perform more complex queries through the LLM

Task
Quickly onboard to the sub-team handling copilot queries to address the accuracy issues

Increase the copilot accuracy from 30-40% to a significantly higher level within a 4-6 month timeline

Enable the copilot to handle more complex customer scenarios, particularly queries requiring multiple database joins

Develop a sustainable way to monitor and measure accuracy improvements over time

Action
Proactively joined the copilot sub-team to directly tackle the accuracy challenges

Proposed and implemented predefined database functions to abstract complex query logic and reduce syntax errors for the LLM

Created a system to provide relevant example queries in prompts based on similarity search to user requests

Developed automated pipelines that run weekly to calculate accuracy on testing datasets

Simplified the overall query generation approach by reducing complexity through abstraction functions

Result
Successfully increased copilot accuracy from 30-40% to approximately 80% within the given timeline

Enabled the copilot to handle significantly more customer scenarios, particularly complex queries with multiple joins

Established ongoing monitoring capabilities through weekly accuracy measurement pipelines

Delivered on customer and program manager expectations for enhanced copilot functionality