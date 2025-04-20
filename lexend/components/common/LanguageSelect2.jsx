"use client";
const languages = ["En", "Ar", "Ch"];
import { useState } from "react";

export default function LanguageSelect2() {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  return (
    <div className="d-inline-block" style={{ position: "relative" }}>
      <a
        onClick={() => setLangOpen((pre) => !pre)}
        className="hstack gap-1 text-none fw-medium text-primary"
        role="button"
        aria-expanded={langOpen}
        aria-haspopup="true"
      >
         <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M2.02783 11.25C2.41136 6.07745 6.72957 2 12.0001 2C11.1693 2 10.4295 2.36421 9.82093 2.92113C9.21541 3.47525 8.70371 4.24878 8.28983 5.16315C7.87352 6.08292 7.55013 7.15868 7.33126 8.32611C7.1558 9.26194 7.04903 10.2485 7.01344 11.25H2.02783ZM2.02783 12.75H7.01344C7.04903 13.7515 7.1558 14.7381 7.33126 15.6739C7.55013 16.8413 7.87351 17.9171 8.28983 18.8368C8.70371 19.7512 9.21541 20.5247 9.82093 21.0789C10.4295 21.6358 11.1693 22 12.0001 22C6.72957 22 2.41136 17.9226 2.02783 12.75Z" fill="#1C274C"></path> <path d="M12.0001 3.39535C11.7251 3.39535 11.3699 3.51236 10.9567 3.89042C10.5406 4.27126 10.1239 4.86815 9.75585 5.68137C9.3902 6.4892 9.09329 7.46441 8.88897 8.55419C8.72806 9.41242 8.62824 10.3222 8.59321 11.25H15.4071C15.372 10.3222 15.2722 9.41242 15.1113 8.5542C14.907 7.46441 14.6101 6.48921 14.2444 5.68137C13.8763 4.86815 13.4597 4.27126 13.0435 3.89042C12.6304 3.51236 12.2751 3.39535 12.0001 3.39535Z" fill="#1C274C"></path> <path d="M8.88897 15.4458C9.09329 16.5356 9.3902 17.5108 9.75585 18.3186C10.1239 19.1319 10.5406 19.7287 10.9567 20.1096C11.3698 20.4876 11.7251 20.6047 12.0001 20.6047C12.2751 20.6047 12.6304 20.4876 13.0435 20.1096C13.4597 19.7287 13.8763 19.1319 14.2444 18.3186C14.6101 17.5108 14.907 16.5356 15.1113 15.4458C15.2722 14.5876 15.372 13.6778 15.4071 12.75H8.59321C8.62824 13.6778 8.72806 14.5876 8.88897 15.4458Z" fill="#1C274C"></path> <path d="M12.0001 2C12.831 2 13.5708 2.36421 14.1793 2.92113C14.7849 3.47525 15.2966 4.24878 15.7104 5.16315C16.1267 6.08292 16.4501 7.15868 16.669 8.32612C16.8445 9.26194 16.9512 10.2485 16.9868 11.25H21.9724C21.5889 6.07745 17.2707 2 12.0001 2Z" fill="#1C274C"></path> <path d="M16.669 15.6739C16.4501 16.8413 16.1267 17.9171 15.7104 18.8368C15.2966 19.7512 14.7849 20.5247 14.1793 21.0789C13.5708 21.6358 12.831 22 12.0001 22C17.2707 22 21.5889 17.9226 21.9724 12.75H16.9868C16.9512 13.7515 16.8445 14.7381 16.669 15.6739Z" fill="#1C274C"></path> </g></svg>
        <span>{selectedLang}</span>
        <span
          data-uc-drop-parent-icon=""
          className="uc-icon uc-drop-parent-icon"
        >
          <svg width={12} height={12} viewBox="0 0 12 12">
            <polyline
              fill="none"
              stroke="#000"
              strokeWidth="1.1"
              points="1 3.5 6 8.5 11 3.5"
            />
          </svg>
        </span>
      </a>
      <div
        className={`bg-white dark:bg-gray-800 shadow-xs rounded uc-drop border-1 border border-black shadow-lg ${
          langOpen ? "uc-open" : ""
        } `}
        style={{
          top: "30px",
          right: 0,
          maxWidth: 60,
        }}
      >
        <ul className="nav-y fw-medium items-center">
          {languages.map((language, index) => (
            <li
            className="border-1 border-bottom border-black px-5 py-1"
              onClick={() => {
                setSelectedLang(language);
                setLangOpen(false);
              }}
              key={index}
            >
              <a>{language}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
