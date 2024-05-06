import React from 'react'
import "../components/style/ManageTeam.css"
import  fot1 from "../assets/mountain-magic-hour.jpg";
import  fot2   from "../assets/pink-clouds-and-stars.jpg";
import  fot3   from "../assets/kirsten-frank-OB62rSdkmw0-unsplash.jpg";
import  fot4    from "../assets/danielle-suijkerbuijk-cHTSIURZ6AM-unsplash.jpg";
import  fot5   from "../assets/cool-iphone-HD-background.jpg";
import  fot6   from "../assets/daniel-j-schwarz-cIogBVk3SEQ-unsplash.jpg";
import  fot7   from "../assets/yellow-tv-set-on-monochromatic-seamless-backdrop.jpg";
import  fot8   from "../assets/pink-clouds-and-stars.jpg";
import  fot9   from "../assets/a-woman-by-a-green-pool.jpg";

const ManageTeam = () => {
  return (
    <div> {/*tabla de personas de admin y user, manager */}
      <div className="overflow-x-auto md">
          <table className="table ">
            {/* head */}
            <thead className="md">
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>age</th>
                <th>phone</th>
                <th>access</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>
                 <div className="font-bold">1</div>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src= {fot1} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Jon Snow</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  jonsnow@gmail.com
                  <br/>
                  <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>35</td>
                <th>
                  <button className="btn btn-ghost btn-xs">(665)121-5454</button>
                </th>
                <td>
                  <button className="btn btn-ghost btn-xs">Admin</button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>
                 <div className="font-bold">2</div>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src= {fot2} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Cersei Lannister</div>
                      <div className="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </td>
                <td>
                 cerseilannister@gmail.com
                  <br/>
                  <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                </td>
                <td>42</td>
                <th>
                  <button className="btn btn-ghost btn-xs">(421)314-2288</button>
                </th>
                <td>
                  <button className="btn btn-ghost btn-xs">Manager</button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>
                 <div className="font-bold">3</div>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={fot3} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Jaime Lannister</div>
                      <div className="text-sm opacity-50">Russia</div>
                    </div>
                  </div>
                </td>
                <td>
                  jaimelannister@gmail.com
                  <br/>
                  <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                </td>
                <td>45</td>
                <th>
                  <button className="btn btn-ghost btn-xs">(422)982-6739</button>
                </th>
                <td>
                  <button className="btn btn-ghost btn-xs">User</button>
                </td>
              </tr>
              {/* row 4 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>
                 <div className="font-bold">4</div>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={fot4} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Anya Stark</div>
                      <div className="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>
                  anyastark@gmail.com
                  <br/>
                  <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                </td>
                <td>16</td>
                <th>
                  <button className="btn btn-ghost btn-xs">(921)425-6742</button>
                </th>
                <td>
                  <button className="btn btn-ghost btn-xs">Admin</button>
                </td>
              </tr>
              {/* row 5 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>
                 <div className="font-bold">5</div>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={fot5} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Daenerys Targaryen</div>
                      <div className="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>
                  daenerystargaryen@gmail.com
                  <br/>
                  <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                </td>
                <td>31</td>
                <th>
                  <button className="btn btn-ghost btn-xs">(421)445-1189</button>
                </th>
                <td>
                  <button className="btn btn-ghost btn-xs">User</button>
                </td>
              </tr>
              {/* row 6 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>
                 <div className="font-bold">6</div>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={fot6} alt='imagen'/>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Ever Melisandre</div>
                      <div className="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>
                 evermelisandre@gmail.com
                  <br/>
                  <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                </td>
                <td>150</td>
                <th>
                  <button className="btn btn-ghost btn-xs">(232)545-6483</button>
                </th>
                <td>
                  <button className="btn btn-ghost btn-xs">Manager</button>
                </td>
              </tr>
              {/* row 7 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>
                 <div className="font-bold">7</div>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={fot7}alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Ferrara Clifford</div>
                      <div className="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>
                  ferraraclifford@gmail.com
                  <br/>
                  <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                </td>
                <td>44</td>
                <th>
                  <button className="btn btn-ghost btn-xs">(543)124-0123</button>
                </th>
                <td>
                  <button className="btn btn-ghost btn-xs">User</button>
                </td>
              </tr>
              {/* row 8 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>
                 <div className="font-bold">8</div>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={fot8} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Rossini Frances</div>
                      <div className="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>
                  rossinifrances@gmail.com
                  <br/>
                  <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                </td>
                <td>36</td>
                <th>
                  <button className="btn btn-ghost btn-xs">(222)444-5555</button>
                </th>
                <td>
                  <button className="btn btn-ghost btn-xs">User</button>
                </td>
              </tr>
              {/* row 9 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>
                 <div className="font-bold">9</div>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={fot9} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Harvey Roxie</div>
                      <div className="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>
                  harveyroxie@gmail.com
                  <br/>
                  <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                </td>
                <td>65</td>
                <th>
                  <button className="btn btn-ghost btn-xs">(444)555-6239</button>
                </th>
                <td>
                  <button className="btn btn-ghost btn-xs">Manager</button>
                </td>
              </tr>
            </tbody>
            {/* foot  Inventions of the Future */}
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </tfoot>
            
          </table>
        </div>
    </div>
  )
}

export default ManageTeam
