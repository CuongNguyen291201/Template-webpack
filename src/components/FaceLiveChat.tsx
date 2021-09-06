import { memo, useEffect, useState } from 'react';
import './styles.scss';

// const DISABLE_POPUP_KEY = 'disableFBPopup';

const FacebookPagePlugin = (props: { className?: string; pageUrl?: string; pageName?: string }) => {
    const { className = '', pageUrl = 'https://www.facebook.com/ICSVietNam.eee/', pageName = 'ICS Viet Nam' } = props;
    // const isDisableFBPopup = JSON.parse(getCookie(DISABLE_POPUP_KEY) ?? false);
    const [isOpen, setOpen] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined' && !!window['FB']) {
            window['FB'].init({
                xfbml: false,
                version: 'v10.0'
            });
            window['FB'].XFBML.parse();
        }
    }, [window]);
    return <div className={`fb-page-plugin${className ? ` ${className}` : ''}`}>
        <div className={`fb-main-popup${isOpen ? ' open' : ''}`}>
            <div className="fb-header">
                <div className="fb-popup-close-button" onClick={() => setOpen(!isOpen)}>
                    <img src="https://test24h.vn/icons/close-chat-icon.png" alt="" />
                </div>
            </div>
            <div className="fb-page"
                data-href={pageUrl}
                data-tabs="messages"
                data-width="300"
                data-height="400"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true">
                <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
                    <a href={pageUrl}>
                        {pageName}
                    </a>
                </blockquote>
            </div>
        </div>
        <div className="fb-page-plugin-button">
            <div className="fb-button-wrap" onClick={() => {
                // setCookie(DISABLE_POPUP_KEY, isOpen);
                setOpen(!isOpen);
            }}>
                <img src="https://test24h.vn/fb-messenger-icon.png" alt="" />
            </div>
        </div>
    </div>;
};

export {
    FacebookPagePlugin
}