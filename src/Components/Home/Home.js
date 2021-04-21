import React from 'react'
import HomeNav from './HomeNav'
import HomeSideNav from './HomeSideNav'

const Home = () => {
    return (
        <div>
            <HomeNav />
            {/* <HomeSideNav /> */}
            <div className='Home'>
                <button>View</button>
                <span className='CropName'>Crop Name</span>
                <span className='Cotton1'>Cotton</span>
                <span className='CropDescription'>Crop Description</span>
                <span className='Cotton2'>Cotton</span>

                <table>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Question in English</th>
                </tr>
                <tr>
                  <td>Bolls damage</td>
                  <td>Bolls damage</td>
                  <td>Do you observe any damage on bolls?</td>
                </tr>
                <tr>
                  <td>Flower damage</td>
                  <td>Flower damage</td>
                  <td>Do you observe any damage on flowers?</td>
                </tr>
                <tr>
                    <td>Leaves damage</td>
                    <td>Leaves damage</td>
                    <td>Do you observe any damage on leaves?</td>
                  </tr>
              </table>

              <span className="symptoms">L1 Symptoms</span>
            </div>
                <div className="line1">
                    <p></p>
                </div>
                <div className="line2">
                    <p></p>
                </div>
                <div className="line3">
                    <p></p>
                </div>
                <div className="line4">
                    <p></p>
                </div>
                <div className="line5">
                    <p></p>
                </div>
                <div className="line6">
                    <p></p>
                </div>
        </div>
    )
}

export default Home
