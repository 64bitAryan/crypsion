import React from 'react'
import logoImg from '../../images/crypsion.png' 
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { MarketplaceContext } from '../../context/TransactionContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom'

const style = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex`,
  logoContainer: `flex items-center cursor-pointer mt-2`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}
const Header = () => {

  const {connectWallet, currentAccount} = useContext(MarketplaceContext);
  console.log(currentAccount)   
  return (
    <div className={style.wrapper}>
        <a href='/'>
            <div className={style.logoContainer}>
                <img src={logoImg} alt='crypsion' height={100} width={140}/>
            </div>
        </a>
        <div className={style.searchBar}>
            <div className={style.searchIcon}>
                <AiOutlineSearch/>
            </div>
            <input className={style.searchInput} placeholder='Search items, collections and accounts'/>
        </div> 
        <div className={style.headerItems}>
            <div className={style.headerItem}>Collections</div>
            <div className={style.headerItem}>Stats</div>
            <div className={style.headerItem}>Resources</div>
            <Link to='create/collection' className={style.headerItem}>Create</Link>
            <div className={style.headerIcon}>
                <CgProfile/>
            </div>
            <div className={style.headerIcon} onClick = {connectWallet}>
                <MdOutlineAccountBalanceWallet/>
            </div>
        </div>
    </div>
  )
}

export default Header