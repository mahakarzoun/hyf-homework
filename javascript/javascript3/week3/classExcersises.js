
const pageBody = document.querySelector('body')
const cvInfo = { name: '', education: '', job: '' }
// 1 
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.sirName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.sirName}`
    }
}

const user1 = new User('maha', 'karzoun')
console.log(user1)
console.log(user1.firstName)
console.log(user1.getFullName())
// cv 
class CV {

    constructor(email) {
        this.jobs = [];           //new Map()
        this.educations = [];
        this.email = email
    }

    addJob(job) {
        this.jobs.push(job)
        return this.jobs      //set(job.id, job)
    }

    removeJob(id) {
        const found = this.jobs.find(element => element.id = id)
        if (found != undefined) {
            this.jobs.splice(found, 1)
        } else {
            console.log('no job under this title')
        }
        return this.job
    }

    addEducation(job) {
        this.educations.push(job)
        return this.educations
    }

    removeEducation() {
        const found = this.jobs.find(element => element.title = this.ti)
        if (found != undefined) {
            this.jobs.splice(found, 1)
        } else {
            console.log('no education under this title')
        }
        return this.jobs
    }
    renderCv(user, cv) {
        let name = document.getElementById('fullName') // name 
        name.innerHTML = `<h1>${user.getFullName()}</h1>`;
        cvInfo.name = name;

        let education = document.getElementById('education') // education 
        let ul = document.createElement('ul')
        ul.innerHTML = '<h2>Education</h2>'
        education.appendChild(ul);
        let renderEducation = cv.educations.forEach((element) => {
            let li = document.createElement('li');
            li.innerText = element.title
            ul.appendChild(li)
        });
        cvInfo.education = renderEducation;
        let jobDiv = document.getElementById('job')      // job 
        let ulJob = document.createElement('ul')
        ulJob.innerHTML = '<h2>Experience</h2>'
        jobDiv.appendChild(ulJob)
        let renderjob = cv.jobs.forEach((element) => {

            let li = document.createElement('li');
            li.innerText = element.title
            ulJob.appendChild(li)
        })
        cvInfo.job = renderjob;    
        let renderUserInfo = Object.values(cvInfo);
        return renderUserInfo
    } 

}

class Job {
    constructor(id, title, description, startDate, endDate) {
        this.id = id;
        this.title = title
        this.description = description
        this.startDate = startDate
        this.endDate = endDate
    }
}

class Education {
    constructor(id, title, school, adress, startDate, endDate) {
        this.id = id;
        this.title = title
        this.school = school
        this.adress = adress
        this.startDate = startDate
        this.endDate = endDate
    }

}

let myCv = new CV('maha.karzoun@gmail.com');
let highSchool = new Education(1, 'high school')
let webDevoloping = new Education(2, 'HYF course')
let teacher = new Job(1, 'teacher');
let devoloper = new Job(2, 'developer');
myCv.addJob(teacher)
myCv.addJob(devoloper)
myCv.addEducation(highSchool)
myCv.addEducation(webDevoloping)

myCv.renderCv(user1, myCv)