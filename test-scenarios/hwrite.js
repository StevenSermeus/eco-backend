import http from "k6/http";
import { check, sleep } from "k6";
export const options = {
	stages: [
		{ duration: "10m", target: 100 },
		{ duration: "20m", target: 100 },
		{ duration: "10m", target: 0 },
	],
};

const base_url = "http://localhost:3000";

function post(path, data) {
	let url = base_url + path;
	let params = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const res = http.post(url, data, params);
	check(res, {
		"status is 200": (r) => r.status === 200,
	});
}

function get(path, params) {
	let url = base_url + path;
	let params = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const res = http.get(url, params);
	check(res, {
		"status is 200": (r) => r.status === 200,
	});
}

function post(path, data) {
	let url = base_url + path;
	let params = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const res = http.post(url, data, params);
	check(res, {
		"status is 200": (r) => r.status === 200,
	});
}

export default function () {}
