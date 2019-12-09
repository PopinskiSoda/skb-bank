import React from 'react';
import './Icon/Icon.scss';
import { ReactComponent as PassportIcon } from '../images/passport.svg';
import { ReactComponent as MapMarkerIcon } from '../images/map_marker.svg';
import { ReactComponent as ReferenceIcon } from '../images/reference.svg';
import { ReactComponent as SuccessIcon } from '../images/success.svg'

const Icon = ({name, children}) => (
	<div className="Icon">
		{(() => {
			switch(name) {
				case 'passport':
					return <PassportIcon />;
				case 'mapMarker':
					return <MapMarkerIcon />;
				case 'reference':
					return <ReferenceIcon />;
				case 'success':
					return (
						<div className="Icon__wrapper">
							<SuccessIcon />
						</div>
					);
				default:
					return null;
			}
		})()}
		{children ? <div className="Icon__caption">{children}</div> : null}
	</div>
);

export default Icon;
