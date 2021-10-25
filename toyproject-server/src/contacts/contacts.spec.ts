
import * as request from 'supertest';

const app = "http://localhost:4000";

describe("Contact Create test",  () => {
    
    it("gogo", async() => {
        await request(app)
    .post("/contacts")
    .send({
        id: 100,
        name: "test",
        deptNo: "100",
        phone: "010-100-100",
        mail: "100@exmaple.com",
        delYn: "N",
        dept: {
            deptNo: 100,
            deptName: "test"
        }
    })
    })
})