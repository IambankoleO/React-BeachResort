import React, { Component } from 'react'
import {RoomContext} from '../Context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'


export class FeaturedRooms extends Component {

  /**** ============= USING HOC to get data from Context ============== */
  static contextType = RoomContext


  render() {

    // Destructuring & getting data from Context API
    let { loading, featuredRooms : rooms } = this.context
    
    
    rooms = rooms.map(room => {
        return <Room key={room.id} room={room} />
    })
    
    return (
      <section className="featured-rooms">
         <Title title="Featured Rooms" />
            <div className="featured-rooms-center">
                { loading ? <Loading /> : rooms  }
            </div>
      
      </section>
    )
  }
}

export default FeaturedRooms
