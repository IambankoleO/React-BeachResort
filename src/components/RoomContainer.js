// import React from 'react'


import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { withRoomConsumer } from '../Context'
import Loading from './Loading'



/**** ============= USING HOC to get data from Context ============== */


 function RoomContainer({context}) {

  const { loading, sortedRooms, rooms} = context
    if(loading) {
      return <Loading />
    }

      return (
        <> 
        <RoomFilter rooms={rooms} />
        <RoomList rooms={sortedRooms}/>
      </>
      );  

}

export default withRoomConsumer(RoomContainer)





/**** ============= USING Context Consumer to get data from Context ============== */

// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import { RoomConsumer } from '../Context'
// import Loading from './Loading'


// export default function RoomContainer() {
//   return (
//     <RoomConsumer> 
//       {
//         (value) => {

//           const {loading, sortedRooms, rooms} = value
          
//           if(loading) {
//             return <Loading />
//           }

//           return (
//             <div>
//             Hello From Rooms Container
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms}/>
//           </div>
//           )
//         }
//       }
//     </RoomConsumer>
   
//   )
// }
