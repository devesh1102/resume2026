While working at Microsoft on an Azure manufacturing project, I was tasked with building custom solutions to help manufacturing companies manage plant data and gain insights. We were in the early stages before customer onboarding, and I needed to create deployment scripts using Bicep to automatically provision Azure resources in client environments. The challenge was that Bicep was still an internal tool with extremely limited documentation for many resources we needed. With only two months to deliver a working deployment solution before our first customers came online, the pressure was significant.

My specific responsibility was to write and configure the Bicep deployment scripts that would automatically provision all necessary Azure resources for our manufacturing solution. I needed to ensure each resource had the correct permissions and network settings so they could communicate with each other, while making sure permissions weren't excessive from a security standpoint. Essentially, I was tasked with creating the entire deployment backbone that would make or break our customer onboarding process. The real challenge was figuring out the correct configurations for Bicep resources that had little to no documentation available.

I knew I couldn't solve this alone, so I first reached out to multiple teams inside Microsoft who had hands-on experience with Bicep. I scheduled sync meetings with engineers from the Azure Resource Manager team and early Bicep adopters to understand best practices and common pitfalls. However, even their guidance only got me so far since our specific use case was unique. Next, I dove into extensive trial and error testing. I would deploy a configuration, then manually test each service by hitting basic APIs to verify they were working correctly. When deployments failed - which happened frequently - I went back and forth with different configurations, methodically changing one parameter at a time to isolate issues. I also had to verify that each resource could communicate with others after deployment, which meant testing network connectivity between services. One particularly challenging issue involved Azure database permissions to blob storage for our cost optimization data archiving feature. I spent days debugging this specific problem, trying different permission models and network configurations. Throughout this process, I ensured all resources remained properly secured behind virtual networks while carefully configuring bypass rules for inter-resource communication. Each failure taught me something new about Bicep's behavior.

After weeks of persistent debugging and collaboration, I successfully delivered the complete Bicep deployment solution just before our deadline. The scripts automatically provisioned all Azure resources with proper security configurations, including the tricky database-to-blob storage permissions that had stumped me for days. When we tested the full deployment end-to-end, everything worked seamlessly - resources communicated correctly, security was properly configured, and the entire infrastructure spun up automatically in under an hour.

This deployment backbone became the foundation that enabled our team to smoothly onboard our first manufacturing customers without any infrastructure hiccups. The solution I built was robust enough that it continued serving as the standard deployment method for all subsequent customer environments. Looking back, this experience taught me that persistence pays off when tackling poorly documented technologies. I learned to leverage internal expertise more effectively and developed a systematic approach to debugging complex infrastructure issues. Most importantly, I gained confidence in my ability to deliver critical solutions even when facing significant unknowns and tight deadlines.



Situation
    Working at Microsoft on a manufacturing project within Azure, building custom products for manufacturing companies to manage plant data and get insights

    In the initial stages of building the product before customer onboarding

    Team needed to deploy various Azure resources in client tenants using Bicep scripts (custom scripts for deploying Azure products)

    Bicep was an internal tool with very limited documentation available for some resources

    Had a 2-month timeline to get the deployment solution working correctly

    Task
    Write and configure Bicep scripts to deploy Azure resources for the manufacturing solution

    Ensure each resource had correct permissions and network settings so resources could communicate with each other

    Make sure permissions were appropriately configured without giving excessive privileges

    Create a reliable deployment backbone that would ensure smooth customer onboarding

    Figure out correct configurations for undocumented Bicep resources

Action
    Actively reached out and synced with multiple people inside Microsoft who had first-hand experience with Bicep

    Conducted extensive trial and error testing to determine correct configurations

    Manually tested each deployment by checking that basic APIs were working at service level

    Verified that each resource could communicate with other resources after deployment

    Ensured all resources were properly secured behind virtual networks with careful bypass configurations for inter-resource communication

    Went back and forth multiple times with different configurations when deployments failed

    Debugged specific issues like Azure database permissions to blob storage for cost optimization data archiving

Result
    Successfully created working Bicep scripts that served as the deployment backbone for the manufacturing product

    Overcame the challenge of limited documentation through persistence and collaboration with internal experts

    Established a reliable deployment solution that would enable smooth customer onboarding

    Resolved complex permission and networking issues, including database-to-blob storage connectivity for cost optimization features