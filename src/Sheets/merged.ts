import { writeFile } from "fs/promises";
import path from 'path';
import { fileURLToPath } from 'url';
import { apnaCollegeQuestions } from "./apnaCollege.js";
import { arshGoyalSheet } from "./arshGoyal.js";
import { loveBabbarSheet } from "./loveBabbar.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export type question = {
    QuestionName: string,
    Link: string,
    Topic: string[]
    Difficulty: "Easy" | "Medium" | "Difficult" | ""
}

const map: {
    [key: string]: number
} = {}

const removeDuplicates = (arr: string[]): string[] => {
    const array = []
    const mp: {
        [key: string]: number
    } = {}
    for (let i = 0; i < arr.length; i++) {
        if (mp[arr[i].trim().toLowerCase()])
            continue;
        else {
            array.push(arr[i]);
            mp[arr[i].trim().toLowerCase()] = 1
        }
    }
    return array
}

const mergeSheets = () => {

    let i = 0
    const merged: question[] = []

    apnaCollegeQuestions.forEach((question) => {
        if (map[question.Link])
            merged[map[question.Link]].Topic = removeDuplicates([...merged[map[question.Link]].Topic, ...question.Topic])
        else {
            merged.push(question)
            map[question.Link] = i++;
        }
    })

    loveBabbarSheet.forEach((question) => {
        if (map[question.Link])
            merged[map[question.Link]].Topic = removeDuplicates([...merged[map[question.Link]].Topic, ...question.Topic])
        else {
            merged.push(question)
            map[question.Link] = i++
        }
    })

    arshGoyalSheet.forEach((question) => {
        if (map[question.Link])
            merged[map[question.Link]].Topic = removeDuplicates([...merged[map[question.Link]].Topic, ...question.Topic])
        else {
            merged.push(question)
            map[question.Link] = i++
        }
    })
    console.log(merged.length, merged.length - apnaCollegeQuestions.length - arshGoyalSheet.length - loveBabbarSheet.length)
    return merged
}


console.time("Merging")
await writeFile(path.join(__dirname, "merged.json"), JSON.stringify(mergeSheets()))
console.timeEnd("Merging")




