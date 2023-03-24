import {Box, Flex,Text} from "@chakra-ui/react"
import SideBar from "../../../components/SideBar/SideBar"

const Users = () => {

    const users = [
     { id: 1, name: 'John Smith', email: 'john@example.com', age: 30, image: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' },
     { id: 2, name: 'Jane Doe', email: 'jane@example.com', age: 25, image: 'https://media.istockphoto.com/id/635978276/photo/im-happy-to-share-this-message.jpg?s=612x612&w=0&k=20&c=HwvMLR3EFk6iuZLco73JnFrGi748FouSWYT2zkSOihw=' },
     { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPfl8XrWxkdx6yWD8Xwm3N87A6cxhHAXmAgmE14o219IM9AMCu1GmQ40noNG0ZToSVNM&usqp=CAU' },
     { id: 5, name: 'Sara Lee', email: 'sara@example.com', age: 35, image: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427' },
     { id: 6, name: 'John Smith', email: 'john@example.com', age: 30, image: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' },
     { id: 7, name: 'Jane Doe', email: 'jane@example.com', age: 25, image: 'https://media.istockphoto.com/id/635978276/photo/im-happy-to-share-this-message.jpg?s=612x612&w=0&k=20&c=HwvMLR3EFk6iuZLco73JnFrGi748FouSWYT2zkSOihw=' },
     { id: 8, name: 'Bob Johnson', email: 'bob@example.com', age: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPfl8XrWxkdx6yWD8Xwm3N87A6cxhHAXmAgmE14o219IM9AMCu1GmQ40noNG0ZToSVNM&usqp=CAU' },
     { id: 9, name: 'Sara Lee', email: 'sara@example.com', age: 35, image: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427' },
     { id: 10, name: 'John Smith', email: 'john@example.com', age: 30, image: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' },
     { id: 12, name: 'Jane Doe', email: 'jane@example.com', age: 25, image: 'https://media.istockphoto.com/id/635978276/photo/im-happy-to-share-this-message.jpg?s=612x612&w=0&k=20&c=HwvMLR3EFk6iuZLco73JnFrGi748FouSWYT2zkSOihw=' },
     { id: 13, name: 'Bob Johnson', email: 'bob@example.com', age: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPfl8XrWxkdx6yWD8Xwm3N87A6cxhHAXmAgmE14o219IM9AMCu1GmQ40noNG0ZToSVNM&usqp=CAU' },
     { id: 14, name: 'Sara Lee', email: 'sara@example.com', age: 35, image: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427' },
   ];
 
   return (
     <Flex>
         <Flex>
             <SideBar />
     <table>
       <thead>
         <tr>
           <th>ID</th>
           <th>Name</th>
           <th>Email</th>
           <th>Age</th>
         </tr>
       </thead>
       <tbody>
         {users.map(user => (
           <tr key={user.id}>
             <td>{user.id}</td>
             <td>{user.name}</td>
             <td>{user.email}</td>
             <td>{user.age}</td>
             <img style={{width: '4rem', height: '4rem', objectFit: 'cover', borderRadius: '50%' }} src={user.image}/>
           </tr>
         ))}
       </tbody>
     </table> 
 
         </Flex>
     </Flex>
 
     )
 }
 
 export default Users