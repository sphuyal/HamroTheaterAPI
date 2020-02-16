const dotenv = require('dotenv');
dotenv.config;
const path = require("path");
const app = require('../index.js')
const request = require('supertest');
const expect = require('chai').expect;
const conn = require('../TestFolder/dbtest');
process.env.SECONDHANDSHOP = 'test';

 let token ='';
 let id ='';

describe('Testing API all routes', () => {
    before(function(done) {
        this.timeout(150000)
        conn.connect()
            .then(() => done())
            .catch((err) => done(err));
    });
    after((done) => {
        conn.close()
            .then(() => done())
            .catch((err) => done(err));
    });

});
    it('Pass, should get signup token', (done) => {
        request(app).post('/users/register')
        .set('Authorization',useJw)
        .send({
            fullName:'messi',
            email:'m@gmail.com',
            address:'portugal',
            phone:'9860486798',
            password:'hello123',
            image:''            

        })
            .then((res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.contain.property('token');
                userJwtToken
        
              
                done();

            })
            .catch((err) => done(err));
    })



it('Pass, sending category name',(done)=>{
    request(app).post('/category').send({
        name:"sdjfs"
    })
    .then((res)=>{
        expect(res.statusCode).to.equal(200);
        done();
    })
})



// /*
//     it('Fail, sending empty name and password', (done) => {
//         request(app).post('/signup').send({
//             email:'raju@gmail.com',
//             fullname:'',
//             password:'',
//             phone:'1212121212',
//             address:'',
//             image:'',
//             dob:''
//             })
//             .then((res) => {
//                 expect(res.statusCode).to.equal(500)
//                 expect(res.body).to.contain.property('status', 'User validation failed: fullName: Path fullName is required.')
//                 done();
//             })
//             .catch((err) => done(err));
//     })*/

//     //-----------user-----------------------------------
//      it('Pass, Get user details', (done) => {
//             request(app).get('/users/')
//                 // .set('Authorization', token)
//                 .then((res) => {
//                     const body = res.body;
//                     // expect(body).to.contain.property('_id');
//                     expect(body).to.not.be.empty;
//                     done();
//                 })
//                 .catch((err) => done(err));
//         })

//      //-------------------------------feedback-----------------------
//          it('Pass', (done) => {
//         request(app).post('/feedback/addFeedback')
//         .send({
//             user:'sharmila@gmail.com',
//             comment:'nice service'           

//         })
//         .then((res) => {
//                  expect(res.statusCode).to.equal(200);
//                 feedbackId = res.body.id
//                 done();
//             })
//             .catch((err) => done(err));
//     })
//     //--------------------doctor-------------------------------
//     it('Pass', (done) => {
//         request(app).post('/doctor/addDoctor')
//         .send({
//             Drname:'sharmila@gmail.com',
//             Qualification:'sharmila',
//             DrType:'8765435678',
//             University:'Bardiya',
//             NMCNo:'9/9/2020',
//             DrImage:''            

//         })
//         .then((res) => {
//                  expect(res.statusCode).to.equal(200);
//                 doctorId = res.body.id
//                 done();
//             })
//             .catch((err) => done(err));
//     })

//        it('Pass, Get doctor details', (done) => {
//             request(app).get('/doctor/')
//                 // .set('Authorization', token)
//                 .then((res) => {
//                     const body = res.body;
//                     // expect(body).to.contain.property('_id');
//                     expect(body).to.not.be.empty;
//                     done();
//                 })
//                 .catch((err) => done(err));
//         })

//         it('Fail, get empty values', (done) => {
//             request(app).get('/doctor/')
//                 // .set('Authorization', 'dummytoken')
//                 .then((res) => {
//                     const body = res.body;
//                     expect(body).to.not.be.empty;
//                     done();
//                 })
//                 .catch((err) => done(err));
//         })

// //----------------contact-------------------------
// // it('Pass, fetch data to server', (done) => {
// //         request(app).post('/contact/addContact')
// //             .send({
// //                 Cemail: "p@gmail.com",
// //                 message: "contact me",
// //                 fullName:"Prachi"
// //             })
// //             .then((res) => {
// //                 expect(res.statusCode).to.equal(200);
// //                 contactId=res.body.id
// //                 done();
// //             })
// //             .catch((err) => done(err));
// //     })




//        it('Pass, Get contact details', (done) => {
//             request(app).get('/contact/')
//                 // .set('Authorization', token)
//                 .then((res) => {
//                     const body = res.body;
//                     // expect(body).to.contain.property('_id');
//                     expect(body).to.not.be.empty;
//                     done();
//                 })
//                 .catch((err) => done(err));
//         })    





//     // it('Fail, sending empty email and fullname', (done) => {
//     //     request(app).post('/contact/addContact').send({
//     //         Cemail:'',
//     //         message:'contactt', 
//     //         fullName:''
//     //         })
//     //         .then((res) => {
//     //             expect(res.statusCode)
//     //             done();
//     //         })
//     //         .catch((err) => done(err));
//     // })

// //-------------------treatment-------------------------------
  
//   it('Pass', (done) => {
//         request(app).post('/treatment/addTreatment')
//         .send({
//             treatmentName:'Braces',
//             treatmentImage:'hhg',
                       

//         })
//         .then((res) => {
//                  expect(res.statusCode);
//                 treatmentId = res.body.id
//                 done();
//             })
//             .catch((err) => done(err));
//     })

//        it('Pass, Get treatment details', (done) => {
//             request(app).get('/treatment/')
//                 // .set('Authorization', token)
//                 .then((res) => {
//                     const body = res.body;
//                     // expect(body).to.contain.property('_id');
//                     expect(body).to.not.be.empty;
//                     done();
//                 })
//                 .catch((err) => done(err));
//         })
//        //------------------------appointment-------------------------
//  it('Pass', (done) => {
//         request(app).post('/appointment/addAppointment')
//         .send({
//             name:'prachi',
//             date:'09/09/2020',
//              time:'12:00 PM',          
//             doctor:'Preethuja',
//             problem:'Cavity'
//         })
//         .then((res) => {
//                  expect(res.statusCode).to.equal(200);
//                 appointmentId = res.body.id
//                 done();
//             })
//             .catch((err) => done(err));
//     })

//        it('Pass, Get appointment details', (done) => {
//             request(app).get('/appointment/')
//                 // .set('Authorization', token)
//                 .then((res) => {
//                     const body = res.body;
//                     // expect(body).to.contain.property('_id');
//                     expect(body).to.not.be.empty;
//                     done();
//                 })
//                 .catch((err) => done(err));
//         })


  

//         /*it('OK, create new treatment and delete the same treatment', (done) => {
//             request(app).post('/treatment')
//                 .set('Authorization', token)
//                 .send({
//                     treatmentNamet: "treatment name about to delete",
                   
//                     treatmentImage: " image about to delete",
//                 })
//                 .then((res) => {
//                     let id = res.body._id
//                     request(app).delete('/treatment/' + id)
//                         .set('Authorization', token)
//                         .then((res) => {
//                             expect(res.statusCode).to.equal(500);
//                             //expect(res.body).to.contain.property('status', 'Location deleted successfully');
//                             done();
//                         })
//                         .catch((err) => done(err));
//                 })
//                 .catch((err) => done(err));
//         })*/