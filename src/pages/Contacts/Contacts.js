import React from 'react';
import { StyledContacts, StyledSocialLink, StyledGrid } from './Contact.styles';
import { Linkedin, Instagram, Send, Mail, GitHub } from 'react-feather';

export const Contacts = () => {
	return (
		<StyledContacts>
			<h1>Contacts</h1>
			<StyledGrid className="grid-container">
				<div className="linkedin">
					<StyledSocialLink
						href="https://www.linkedin.com/in/oleksii-yakubin-aa265513a/"
						target="__blank"
					>
						<Linkedin />
						&nbsp;Linkedin
					</StyledSocialLink>
				</div>
				<div className="instagram">
					<StyledSocialLink
						href="https://www.instagram.com/alexmckey1337/"
						target="__blank"
					>
						<Instagram />
						&nbsp;Instagram
					</StyledSocialLink>
				</div>
				<div className="telegram">
					<StyledSocialLink href="https://t.me/alexmckey" target="__blank">
						<Send />
						&nbsp;Telegram
					</StyledSocialLink>
				</div>
				<div className="mail">
					<StyledSocialLink
						href="mailto:wallhack35@gmail.com"
						target="__blank"
					>
						<Mail />
						&nbsp;Mail me
					</StyledSocialLink>
				</div>
				<div className="github">
					<StyledSocialLink
						href="https://github.com/Alexmckey1337"
						target="__blank"
					>
						<GitHub />
						&nbsp;Github
					</StyledSocialLink>
				</div>
			</StyledGrid>
		</StyledContacts>
	);
};
