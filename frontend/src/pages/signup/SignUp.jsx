import React from "react";
import GenderCheckBox from "./GenderCheckBox";

export default function SignUp() {
	return (
		<div className=' backdrop-filter backdrop-blur-lg bg-clip-padding p-6 bg-opacity-0 w-full flex items-center justify-center rounded-lg max-w-96 mx-auto flex-col'>
			<h1 className='text-3xl font-semibold text-center text-gray-300'>
				Sign Up <span className='text-[#CCBA84]'>ChatApp</span>
			</h1>
			<form className='w-full'>
				<div className='w-full'>
					<label className='label p-2'>
						<span className='text-base label-text'>FullName</span>
					</label>
					<input
						type='text'
						placeholder='Enter FullName'
						className='w-full input input-bordered h-10'
					/>
				</div>
				<div className='w-full'>
					<label className='label p-2'>
						<span className='text-base label-text'>UserName</span>
					</label>
					<input
						type='text'
						placeholder='Enter UserName'
						className='w-full input input-bordered h-10'
					/>
				</div>
				<div className='w-full'>
					<label className='label p-2'>
						<span className='text-base label-text'>Password</span>
					</label>
					<input
						type='password'
						placeholder='Enter Password'
						className='w-full input input-bordered h-10'
					/>
				</div>
				<div className='w-full'>
					<label className='label p-2'>
						<span className='text-base label-text'>Confirm Password</span>
					</label>
					<input
						type='password'
						placeholder='Confirm Password'
						className='w-full input input-bordered h-10'
					/>
				</div>
				{/* GENDER CHECKBOX GOES HERE*/}
				<GenderCheckBox />
				<a
					href='#'
					className='text-[12px] hover:underline hover:text-yellow-200 mt-2 inline-block'>
					Already have an account?
				</a>
				<div>
					<button className='btn btn-block btn-sm mt-2'>Sign Up</button>
				</div>
			</form>
		</div>
	);
}
