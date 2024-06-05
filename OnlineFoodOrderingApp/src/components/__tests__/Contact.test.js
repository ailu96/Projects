import { render ,screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"




describe("Contant US {age Testcases",()=>{

beforeAll(()=>{
        console.log("before all")
})

beforeEach(()=>{
        console.log("Before Each")
})

afterAll(()=>{
        console.log("before all")
})

afterEach(()=>{
        console.log("after Each")
})


test("Should Load Contact US Content",()=>{
    render(<Contact></Contact>);
    
    const heading=screen.getByRole("heading");
    
    expect(heading).toBeInTheDocument();
    })
    
    
it("Should Load Button inside Contact US Component",()=>{
        render(<Contact></Contact>);
        
        const button=screen.getByRole("button");
        
        expect(button).toBeInTheDocument();
        })
    
    
    test("Should Load Name Input inside Contact US Component",()=>{
            render(<Contact></Contact>);
            
            const name=screen.getByPlaceholderText("Name");
            
            expect(name).toBeInTheDocument();
            })
    
    
    
    test("Should Load 2  Input boxes inside Contact US Component",()=>{
            render(<Contact></Contact>);
                
            const nameAll=screen.getAllByRole("textbox");
                
            expect(nameAll.length).toBe(2);
        })
    
})