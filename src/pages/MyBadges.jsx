import { React } from 'react';
import '../styles/MyBadge.scss';
import Header from '../components/Header';
import Badge from '../components/Badge';

function MyBadgesView() {
    return (
        <div>
            <Header isNavigationBar={true} viewName={'My Badges'} />
            <div className={'badge-group'}>
                <Badge imageUrl={'https://yhs.kr/static/image/python.svg'} />
                <Badge
                    imageUrl={'https://yhs.kr/static/image/python.svg'}
                    active={true}
                />
                <Badge
                    imageUrl={'https://yhs.kr/static/image/python.svg'}
                    active={true}
                />
                <Badge imageUrl={'https://yhs.kr/static/image/python.svg'} />
            </div>
        </div>
    );
}

export default MyBadgesView;
