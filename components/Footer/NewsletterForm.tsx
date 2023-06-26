import { Button } from '../Button';
import { Input } from '../Input';

export const NewsletterForm = () => (
	<form className="mt-6 flex gap-x-2">
		<Input type="email" placeholder="Enter your email address" fill />
		<Button type="submit">Submit</Button>
	</form>
);
