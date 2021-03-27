# Maven

Maven is a decentralized library where people can come to search up textbooks to trade or rent. We will have an initial collection of popular textbooks at first to garner users, who can then expand the collection of available books (receiving commission for doing so), or request to rent a book that they need.


## Setup
1. Clone the repository and download [Docker](https://www.docker.com/get-started) (You will also need to enable virtualization on your CPU, how to do this is specific to what kind of motherboard your PC uses along with what kind of CPU, older models of CPU's do not support virtualizaion)
2. Once Docker is installed open your terminal and change directories to where you cloned the repository
3. Once there, run the command `docker-compose up`, this will run the local web server along with the database and it should now appear in the desktop program


## Architectural Decisions

### Important Qualities
For our software product, an important quality is the nonfunctional product characteristics (such as security and performance), since we will be dealing with sensitive information like personal user information and CC’s. Product lifetime is also important since we want to maintain the site and rental services of books for a long time. Finally, consideration of number of users is important, as we want to be able to handle the fluctuating load of users that are visiting and making transactions on the site.

### Technologies Chosen
- Database: We will use a relational database, as we are not dealing with highly complex or variable data (users and book info).
- Platform: We will use a web platform.
- Server: Given the issue of scalability, it would be ideal to design it to run on the cloud.
- Open source: Yes, we will use open source tools for building the user interface and modeling databases.
- Development Tools: As we are using Django for our backend, it is somewhat opinionated, but it can be customized and it is unlikely to be an issue that will limit our architectural choices.
