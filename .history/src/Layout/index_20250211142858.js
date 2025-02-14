import { Outlet } from "react-router-dom";
import {  NavLink } from "react-router-dom";
import logo from "../image/logo.png"
import { RiFileUserFill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import SearchBar from '../Components/Search/Search'
import './style.css';

import MenuDropdown from "../Components/dropdown/MenuDropdown";

function Layout(){
    return(
        <>
            <div className='layout'>
                <header className="layout_header">
                    <div className='layout_logo'>
                        <NavLink to='/'>
                            <img src={logo} alt="logo" style={{height:'70px ', width:'70px '}}/>
                        </NavLink>

                    </div>
                    <div className='layout_menu_1'>
                        <ul>
                            <li>
                                <NavLink to='/bestseller'>BESTSELLER</NavLink>
                            </li>
                            <li>
                                <NavLink to='/order'>Đặt hàng </NavLink>
                            </li>
                            <li>
                                <NavLink to='/sale'>SALE</NavLink>
                            </li>
                            <li>
                                <NavLink to='/onala'>ONALA </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='layout_menu_2'>
                        <ul>
                            <li>
                                <NavLink to='/login'>
                                    <RiFileUserFill style={{color:'#000 ', fontSize:'30px'}}/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/cart'>
                                    <FaShoppingBag style={{color:'#000 ', fontSize:'30px'}}/>
                                </NavLink>
                            </li>
                            
                            <li>
                                
                                <MenuDropdown style={{color:'#000 ', fontSize:'30px'}}/>
                                
                            </li>
                            <li>
                                <SearchBar style={{color:'#000000'}}/>
                            </li>
                        </ul>
                    </div>
                </header>
                <main className="layout_main"><Outlet/></main>
                <footer className="layout_footer" >
                    <div className="footer_1">
                        <h2>Danh mục sản phẩm</h2>
                        <ul>
                            <li>
                                <NavLink to='/'>Đồ Ăn Vặt</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Bánh Ngọt</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Combo 1 Người</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Combo 2 Người</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Combo Nhóm 4</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Humberger</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Cơm Gà + Sốt</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Đồ uống</NavLink>
                            </li>
                        </ul>
        
                    </div>
                    <div className="footer_1">
                        <h2>ONALA FASTFOOD</h2>
                        <ul>
                            <li>
                                <NavLink to='/recommend'>Giới thiệu</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Tin tức</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Tuyển dụng </NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Đặt tiệc sinh nhật</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_1">
                        <h2>Liên Hệ & Chính Sách </h2>
                        <ul>
                            <li>
                                <NavLink to='/'>Theo Dõi Đơn Hàng</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Liên Hệ ONALA</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Hệ Thống </NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Khiếu Nại</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Chính sách và Quy Định</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Chính sách hoạt động</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_2">
                        <ul>
                            <li>
                                <BiLogoFacebookSquare style={{fontSize:'35px'}} />
                            </li>
                            <li>
                                <FaInstagram style={{fontSize:'35px'}}/>
                            </li>
                            <li>
                                <FaYoutube style={{fontSize:'35px'}}/>
                            </li>
                            <li>
                                <FaTwitterSquare style={{fontSize:'35px'}}/>
                            </li>
                        </ul>
                    </div>
                    
                </footer>
                <div style={{background:'#000000', color:'#7AA0A3', textAlign:'center', paddingTop:'20px', paddingBottom:'45px', fontFamily:'Lora', fontSize:'20px', fontWeight:"bold"}}>ONALA  FASTFOOD</div>
                
            </div>
        </>
    );
}
export default Layout;